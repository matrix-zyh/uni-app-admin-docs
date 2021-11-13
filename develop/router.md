---
title: 路由和菜单
lang: zh-CN
---

# 路由和菜单
<span style="background-image: linear-gradient(135deg, #4253d8, #d333ba); -webkit-background-clip: text; color: transparent; font-size: 18px;">这是菜单，但是却没有吃的</span>

## 基本结构
得益于 [uni-simple-router](https://hhyang.cn/v2/) UniApp Matrix Admin 通过 [uni-simple-router](https://hhyang.cn/v2/) 实现路由的跳转以及页面标题等元素。

## 路由
UniApp Matrix Admin 的路由配置完全遵循 `vue-router` 的 routes配置规则。另外我们还在 `routes` 的元数据属性 `meta` 中注入了一个属性 `title`。它们将在生成页面时发挥作用。配置如下：
```js {7}
const routes = [
  {
    path: '/pages/login/index',
    aliasPath: '/login',
    name: 'login',
    meta: {
      title: '登录'
    }
  }
]
```
完整配置示例，请查看 [src/route/index.js](https://github.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/router/index.js)

## 菜单
UniApp Matrix Admin 的菜单目前是做成可动态配置项，完全可根据业务需求自定义配置菜单权限。菜单完全遵循 [uview-ui](https://www.uviewui.com/) 的 [tab-bar](https://www.uviewui.com/components/tabbar.html) 配置规则，`tab-bar` 最少两个，最多不能超过5个。配置属性及菜单功能对应关系如下：
|路由属性|对应菜单功能|
|:-------------------|:-------|
|**pagePath**        |点击 tab-bar 时的跳转链接 (路径需要以"/"开头)|
|**iconPath**        |为选中 tab-bar 时的图标样式|
|**selectedIconPath**|选中 tab-bar 时的图标样式|
|**text**            |tab-bar 标题|
|**count**           |tab-bar 角标(消息提示之类)|
|**isDot**           |配置此值为true，那么角标将会以红点的形式显示|

更多详细配置请查看 [tab-bar](https://www.uviewui.com/components/tabbar.html) 介绍

## 页面标题
如果您并不想自定义页面 `nav-bar`，那么您可以不需关注该部分。UniApp Matrix Admin 页面使用自定义 `nav-bar` 功能，使页面看起来更加自然，融合。当然，更多的还是可完全自定义。<br />
如果您想自定义页面标题，在页面对应的路由元数据 `meta` 中定义 `title` 属性即可。如下示例，定义了首页的标题：
```js {7}
const routes = [
  {
    path: '/pages/login/index',
    aliasPath: '/login',
    name: 'login',
    meta: {
      title: '自定义标题'
    }
  }
]
```
更多细节可查看 [src/route/index.js](https://gitee.com/matrix-zyh/uni-app-matrix-admin/blob/master/src/router/index.js)
