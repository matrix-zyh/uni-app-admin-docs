---
title: 拦截器配置
lang: zn-CN
---

# 拦截器配置
<span style="background-image: linear-gradient(135deg, #4253d8, #d333ba); -webkit-background-clip: text; color: transparent; font-size: 18px;">你想去便去？想来便来？你当这里是哪里</span>

## 请求拦截器
你可以为每个请求拦截器配置 `onResolved` 或 `onRejected` 两个钩子函数。

### onResolved
我们会为 onResolved 钩子函数注入 config 和 options 两个参数：
* `config: LuchRequestConfig`: luch-request 请求配置，详情参考 [luch-request 请求配置](https://www.quanzhan.co/luch-request/guide/3.x/#%E5%85%A8%E5%B1%80%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE)
* `options: Object`: 应用配置，包含: { Router, store }，可根据需要扩展。

### onRejected
我们会为 onRejected 钩子函数注入 error 和 options 两个参数：
* `error: Error`: luch-request 请求错误对象，详情参考 [luch-request 请求配置](https://www.quanzhan.co/luch-request/guide/3.x/#%E5%85%A8%E5%B1%80%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE)
* `options: Object`: 应用配置，包含: { Router, store }，可根据需要扩展。

如下，为一个完整的请求拦截器配置：
```js
const reqCommon = {
  // 发送请求之前做些什么
  onResolved(config, { Router }) {
    // 格式化参数 (过滤参数中的空值)
    config.params = config.params ? filterEmpty.removeEmptyFields(config.params) || {} : {}
    if (config.method !== 'GET') {
      config.data = filterEmpty.removeEmptyFields(config.data || {}) || {}
    }
    // 请求携带 token 认证
    const access_token = cookie.access_token()
    if (config.custom.token) {
      if (access_token) {
        config.header['X-Access-Token'] = access_token
      } else {
        uni.$u.toast('登录时效过期，请重新登录！')
        setTimeout(() => {
          Router.replaceAll({ path: '/login' })
        }, 1000)
      }
    }
    return config
  },
  // 请求出错时做些什么
  onRejected(error, options) {
    return Promise.reject(error)
  }
}
```

## 响应拦截器
响应拦截器也同样可以配置 `onResolved` 或 `onRejected` 两个钩子函数。

### onResolved
我们会为 onResolved 钩子函数注入 response 和 options 两个参数：
* `response: LuchRequestConfig`: luch-request 响应对象，详情参考 [luch-request 响应对象](https://www.quanzhan.co/luch-request/guide/3.x/#%E6%8B%A6%E6%88%AA%E5%99%A8)
* `options: Object`: 应用配置，包含: { Router, store }，可根据需要扩展。

### onRejected
我们会为 onRejected 钩子函数注入 error 和 options 两个参数：
* `error: Error`: luch-request 请求错误对象，详情参考 [luch-request 请求配置](https://www.quanzhan.co/luch-request/guide/3.x/#%E5%85%A8%E5%B1%80%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE)
* `options: Object`: 应用配置，包含: { Router, store }，可根据需要扩展。

如下，为一个完整的响应拦截器配置：
```js
const resp401 = {
  // 响应数据之前做点什么
  onResolved(response, options) {
    if (response.status === 401) {
      // we can do something ...
    }
    return response
  },
  // 响应出错时做点什么
  onRejected(error, options) {
    if (response.status === 401) {
        // we can do something ...
    }
    return Promise.reject(error)
  }
}
```

## 导出拦截器
定义好拦截器后，只需在 [src/http/interceptors.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/http/interceptors.js) 文件中导出即可。分为两类，`请求拦截器` 和 `响应拦截器`。如下：
```js
export default {
  request: [reqCommon], // 请求拦截
  response: [resp401]   // 响应拦截
}
```

## 完整的拦截器配置示例
```js
import Cookie from "@utils/cookie";
import filterEmpty from '@/utils/filterEmpty'

// 请求拦截
const reqCommon = {
  // 发送请求之前做些什么
  onResolved(config, { Router }) {
    // 格式化参数 (过滤参数中的空值)
    config.params = config.params ? filterEmpty.removeEmptyFields(config.params) || {} : {}
    if (config.method !== 'GET') {
      config.data = filterEmpty.removeEmptyFields(config.data || {}) || {}
    }
    // 请求携带 token 认证
    const access_token = Cookie.access_token()
    if (config.custom.token) {
      if (access_token) {
        config.header['X-Access-Token'] = access_token
      } else {
        uni.$u.toast('登录时效过期，请重新登录！')
        setTimeout(() => {
          Router.replaceAll({ path: '/login' })
        }, 1500)
      }
    }
    return config
  },
  // 请求出错时做些什么
  onRejected(error) {
    return Promise.reject(error)
  }
}

// 响应拦截 statusCode === 401
const resp401 = {
  onResolved(response) {
    if (response.statusCode === 401) {
      uni.$matrix.warning(response.config.url)
    }
    return response
  },
  onRejected(error) {
    if (error.statusCode === 401) {
      uni.$matrix.error(error.config.url)
    }
    return Promise.reject(error)
  }
}

// 响应拦截 statusCode === 404
const resp404 = {
  onResolved(response) {
    if (response.statusCode === 404) {
      uni.$matrix.warning(response.config.url)
    }
    return response
  },
  onRejected(error) {
    if (error.statusCode === 404) {
      uni.$matrix.error(error.config.url)
    }
    return Promise.reject(error)
  }
}

// 响应拦截 statusCode === 500
const resp500 = {
  onResolved(response) {
    if (response.statusCode === 500) {
      uni.$matrix.warning(response.config.url)
    }
    return response
  },
  onRejected(error) {
    if (error.statusCode === 500) {
      uni.$matrix.error(error.config.url)
    }
      return Promise.reject(error)
  }
}

// 响应拦截 statusCode === 502
const resp502 = {
  onResolved(response) {
    if (response.statusCode === 502) {
      uni.$matrix.warning(response.config.url)
    }
    return response
  },
  onRejected(error) {
    if (error.statusCode === 502) {
      uni.$matrix.error(error.config.url)
    }
    return Promise.reject(error)
  }
}

// 响应拦截 statusCode === 503
const resp503 = {
  onResolved(response) {
    if (response.statusCode === 503) {
      uni.$matrix.warning(response.config.url)
    }
    return response
  },
  onRejected(error) {
    if (error.statusCode === 503) {
      uni.$matrix.error(error.config.url)
    }
    return Promise.reject(error)
  }
}

// 响应拦截 statusCode === 200
const resp200 = {
  onResolved(response, { Router }) {
    if (response.statusCode === 200) {
      /* eslint-disable */
      switch (String(response.data.code)) {
        case '200':
          return response.data.value
        case '800':
        case '900':
          uni.$u.toast(response.data.message)
          return Promise.reject(response.data.message)
        case '90000':
          uni.$u.toast('登录时效过期，请重新登录！')
          setTimeout(() => {
            Router.replaceAll({name: 'login'})
          }, 1000)
          break
        default:
          break
      }
      /* eslint-enable */
    }
  }
}

// 响应拦截 请求超时
const timeout = {
  onRejected(error) {
    const { errMsg } = error
    if (errMsg === 'request:fail timeout') {
      uni.$u.toast('请求超时！')
    }
    return Promise.reject(error)
  }
}

// 响应拦截 设备断网
const noNetwork = {
  onRejected(error) {
    const { errMsg } = error
    if (errMsg === 'request:fail ') {
      uni.$u.toast('网络连接失败，请检查网络！')
    }
    return Promise.reject(error)
  }
}

export default {
  // 请求拦截
  request: [reqCommon],
  // 响应拦截
  response: [resp401, resp404, resp500, resp502, resp503, timeout, noNetwork, resp200]
}
```
:::