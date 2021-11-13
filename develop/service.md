---
title: 服务端交互
lang: zh-CN
---

# 服务端交互
<span style="background-image: linear-gradient(135deg, #4253d8, #d333ba); -webkit-background-clip: text; color: transparent; font-size: 18px;">我需要它，我该如何做，你才会把它给我呢</span>

## 服务交互流程
在 UniApp Matrix Admin 中，服务端交互流程如下：
* 组件内调用 `api/service` 服务 `API`
* `api/service` 服务 `API` 封装请求数据，通过 [http/request.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/http/request.js) 发送请求
* 组件获取 `api/service` 返回的数据，更新视图数据或触发其它行为

我们以登录为例，[Login.vue](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/pages/login/index.vue) 组件内，用户输入账号密码，点击登录，调用 [api/services/base.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/api/services/base.js) 中的 `login` Api
```vue {5,16}
<template>
  ...
</template>
<script>
import { login } from '@api/services/base'
...
export default {
  name: 'Login',
  methods: {
    onSubmit (e) {
      this.$refs.uForm.validate(valid => {
        if (valid) {
          const username = this.username
          const password = this.password
          if (this.$u.test.mobile(this.username)) {
            login({ username, password }).then(res => this.afterLogin(res))
          }
        }
      })
    }
  }
}
</script>
```

[api/services/base.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/api/services/base.js) 中的 `login` Request 封装账户密码数据，通过 [http/request.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/http/request.js) 发送登录服务请求
```js
import API from "@api/interface/base"
import { request, METHOD } from '@http'
/**
 * 登录服务
 * @param name 账户名
 * @param password 账户密码
 * @returns {Promise}
 */
async function login({ name, password }) {
  return request(API.login, METHOD.POST, { name, password })
}
```

[Login.vue](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/pages/login/index.vue) 获取登录服务返回的数据，进行后续操作
```vue {14,18-20}
<template>
  ...
</template>
<script>
import { login } from '@api/services/base'
...
export default {
  name: 'Login',
  methods: {
    onSubmit (e) {
      this.$refs.uForm.validate(valid => {
        if (valid) {
          ...
          login({ username, password }).then(res => this.afterLogin(res))
        }
      })
    },
    afterLogin(res) {
      // we can do something ...
    }
  }
}
</script>
```

## 服务模块结构
服务模块结构如下：
```bash
...
├── src
│   └── api                     # 数据服务模块
│       ├── interface           # api 地址管理
│       │   └── base.js         # 地址
│       └── services            # services 服务管理
│           └── base            # 服务
...
│   └── http                    # 数据服务模块
│       ├── baseUrl             # http 请求域名统一前缀
│       ├── interceptors        # 请求拦截器
│       └── request.js          # 基于 luch-request 的 http 请求工具
...
```
- [api/interface](https://github.com/matrix-zyh/uni-app-matrix-admin/tree/master/src/api/interface) 文件夹下， [base.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/api/interface/base.js) 用于服务请求地址的统一管理 (模块化，如果存放用户相关,可以新建 `user.js` 文件进行地址统一管理)。
- [api/services](https://github.com/matrix-zyh/uni-app-matrix-admin/tree/master/src/api/services) 文件夹下， [base.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/api/services/base.js) 用于请求服务的统一管理，与上面一样，模块化管理请求服务。

## Request 请求
[http/request.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/http/request.js) 基于 [luch-request](https://www.quanzhan.co/luch-request/guide/3.x/) 封装了一些常用的函数，如下：
```js
export {
  request,          // http 请求函数
  METHOD,           // http method 常量
  loadInterceptors  // http 拦截器
}
```

## Base url 配置
你可以在项目根目录下的 [src/config](https://github.com/matrix-zyh/uni-app-matrix-admin/tree/master/src/config) 文件夹下新建环境变量文件([env.dev.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/config/env.dev.js) 和 [env.prev.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/config/env.prev.js) 和 [env.prod.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/config/env.prod.js))中配置你的 API 服务 base url 地址。

开发环境 [env.dev.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/config/env.dev.js)文件
```js
const { merge } = require('webpack-merge')
const commConfig = require('./env')

module.exports = merge(commConfig, {
  // 当前环境所属 API域名
  UNI_API_URL: 'http://www.dev.com',
  // 当前环境所属 API域名所对应的 内网 ip:port
  UNI_API_IP_URL: 'http://127.0.0.1:0000',
  // 是否删除 console.log()
  UNI_DROP_CONSOLE: false,
  // 是否压缩代码
  UNI_COMPRESSION_CODE: false
})
```
预览环境 [env.prev.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/config/env.prev.js) 文件：
```js
const { merge } = require('webpack-merge')
const commConfig = require('./env')

module.exports = merge(commConfig, {
  // 当前环境所属 API域名
  UNI_API_URL: 'http://www.prev.com',
  // 当前环境所属 API域名所对应的 内网 ip:port
  UNI_API_IP_URL: 'http://127.0.0.1:0000',
  // 是否删除 console.log()
  UNI_DROP_CONSOLE: true,
  // 是否压缩代码
  UNI_COMPRESSION_CODE: true
})
```
生产环境 [env.prod.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/config/env.prod.js) 文件：
```js
const { merge } = require('webpack-merge')
const commConfig = require('./env')

module.exports = merge(commConfig, {
  // 当前环境所属 API域名
  UNI_API_URL: 'http://www.prod.com',
  // 当前环境所属 API域名所对应的 内网 ip:port
  UNI_API_IP_URL: 'http://127.0.0.1:0000',
  // 是否删除 console.log()
  UNI_DROP_CONSOLE: true,
  // 是否压缩代码
  UNI_COMPRESSION_CODE: true
})
```

## 跨域设置
在开发环境中，通常我们的 `Vue` 应用和服务应用运行在不同的地址或端口上。我们可以通过简单的设置，代理前端请求，来避免跨域问题。如下：

首先，在 [src/config/env.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/config/env.js) 文件中设置 `UNI_PROXY_PREFIX` 常量：
```js
module.exports = {
    // 跨域代理前缀
  UNI_PROXY_PREFIX: '/proxy'
}
```

然后，在 [src/http/baseUrl.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/http/baseUrl.js) 文件中设置 `BASE_URL` 常量：
```js {3,6}
const ENV = require('@/config/env.' + process.env.NODE_ENV)

let BASE_URL = ''
// #ifdef H5
BASE_URL = ENV.UNI_PROXY_PREFIX
// #endif
// #ifndef H5
BASE_URL = ENV.UNI_REQUEST_TYPE
  ? ENV.UNI_API_URL + ENV.UNI_PROXY_PREFIX
  : ENV.UNI_IP_API_URL + ENV.UNI_PROXY_PREFIX
// #endif

export { BASE_URL }
```
然后，在 [vue.config.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/vue.config.js) 文件中配置代理：
```js {4-5,9}
model.exports = {
  devServer: {
    proxy: {
      [ENV.UNI_PROXY_PREFIX]: {
        target: ENV.UNI_REQUEST_TYPE ? ENV.UNI_API_URL : ENV.UNI_API_IP_URL,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          [`^${ENV.UNI_PROXY_PREFIX}`]: ENV.UNI_PROXY_PREFIX
        }
      }
    }
  }
}
```
:::tip 温馨小提示
此代理配置仅适用于H5端开发环境，生产环境的跨域代理请在自己的 `web` 服务器配置。小程序 及 App 不需要设置。
:::
