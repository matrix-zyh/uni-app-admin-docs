---
title: 项目配置
lang: zn-CN
---

# 项目配置
<span style="background-image: linear-gradient(135deg, #4253d8, #d333ba); -webkit-background-clip: text; color: transparent; font-size: 18px;">可以个性化您的项目配置，如：项目名称、缓存、域名等，还不赶紧试一试</span>

## 环境变量配置
项目的环境变量配置位于项目 `src/config` 目录下的 [env.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/config/env.js)、[env.dev.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/config/env.dev.js)、[env.prev.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/config/env.prev.js)、[env.prod.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/config/env.prod.js)

```bash
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

:::tip 温馨提醒
- 为统一规范，环境变量命名以 `UNI_` 开头，你可以在项目代码中这样访问它们：
```js
const ENV = require('@/config/env.' + process.env.NODE_ENV)
console.log(ENV)
```
:::

### env.js
所有环境适用

```js
  // 项目名称
  UNI_GLOB_APP_NAME: 'Uni App Admin',
  // 代理前缀
  UNI_PROXY_PREFIX: '/proxy',
  // 微信 AppID (可选)
  UNI_APP_ID: 'xxxxxxxxxxxxxxxxxx',
  // 微信 AppSecret (可选)
  UNI_APP_SECRET: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  // 用户信息 Key
  UNI_GLOB_USER_KEY: 'admin.user',
  // 用户路由菜单 Key
  UNI_GLOB_ROUTES_KEY: 'admin.routes',
  // 服务器静态文件路径 (可选)
  UNI_GLOB_STATIC_FILE: '/file/path',
  // 服务器Icon文件路径 (可选)
  UNI_GLOB_STATIC_ICON: '/file/path',
  // 服务器获取应用上传文件路径 (可选)
  UNI_GLOB_UPLOAD_FILE: '/file/path',
  // 当前请求类型 (true：域名、false：IP)
  UNI_REQUEST_TYPE: true
```

### env.dev.js

开发环境适用

```js
  // 当前环境所属 API域名
  UNI_API_URL: 'http://www.dev.com',
  // 当前环境所属 API域名所对应的 内网 ip:port
  UNI_API_IP_URL: 'http://127.0.0.1:0000',
  // 是否删除 console.log()
  UNI_DROP_CONSOLE: false
```

### env.prev.js

预览环境适用

```js
  // 当前环境所属 API域名
  UNI_API_URL: 'http://www.prev.com',
  // 当前环境所属 API域名所对应的 内网 ip:port
  UNI_API_IP_URL: 'http://127.0.0.1:0000',
  // 是否删除 console.log()
  UNI_DROP_CONSOLE: false
```

### env.prod.js

生产环境适用

```js
  // 当前环境所属 API域名
  UNI_API_URL: 'http://www.prod.com',
  // 当前环境所属 API域名所对应的 内网 ip:port
  UNI_API_IP_URL: 'http://127.0.0.1:0000',
  // 是否删除 console.log()
  UNI_DROP_CONSOLE: true
```