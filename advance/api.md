---
title: 全局API
lang: zn-CN
---

# 全局 API
<span style="background-image: linear-gradient(135deg, #4253d8, #d333ba); -webkit-background-clip: text; color: transparent; font-size: 18px;">怎么哪哪都有你</span>

:::tip 温馨提示
我们提供了一些全局Api，在日常功能开发中或许会有帮助，它们均被绑定到了页面组件或子组件实例上。
在 `vue` 组件内可以直接通过 `this.$m[apiName]` 的方式调用，而在 `js` 页面内可以通过 `uni.$m[apiName]` 的方式调用。如下：
:::

## 请求 Loading
### loading(bool = true)
该 api 用于自定义控制请求加载 loading 的时机。接受一个参数：
* **bool (选填)**  
bool为 `true` 的时候，打开loading，bool为 `false` 的时候，关闭loading。(默认为 `true`)

## Console
### log
该 api 自定义了 console.log 的样式，在开发中不妨寻找一下有意思的乐趣。
### warn
该 api 自定义了 console.warn 的样式，在开发中不妨寻找一下有意思的乐趣。
### error
该 api 自定义了 console.error 的样式，在开发中不妨寻找一下有意思的乐趣。

## 工具
### isEffectiveCommon(formatData)
该 api 用于格式化页面数据。接受一个参数：
* **formatData (必填)**  
需要进行格式化的数据，如果值为 `''`, `undefined`, `'undefined'`, `null`, `'null'`, `'NaN'`，将在页面默认显示 `-`

### isEffectiveNumber(formatData)
该 api 用于格式化页面数字。接受一个参数：
* **formatData (必填)**  
需要进行格式化的数据，如果值为 `''`, `undefined`, `'undefined'`, `null`, `'null'`, `'NaN'`，将在页面默认显示 `0`

### formatPhone(phone)
该 api 用于格式化手机号码，保护用户隐私。接受一个参数：
* **phone (必填)**  
手机号码，格式化后在页面以 `188****8888` 这种形式展示。

### formatMoney(number, symbol, places, thousand, decimal)
该 api 用于格式化金额。接受五个参数：
* **number (必填)**  
金额，可以为 `Number` 类型，以及 `String` 类型。
* **symbol (选填)**  
金额标识 [￥, $]，默认为 `￥`。
* **places (选填)**  
`.` 后面保留几位小数，默认保留两位小数。
* **thousand (选填)**  
占位符，默认以 `,` 占位。`8,888.88`
* **decimal (选填)**  
分隔符 [.后保留两位小数]，默认以 `.` 分隔
