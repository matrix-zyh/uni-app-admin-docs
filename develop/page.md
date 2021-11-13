---
title: 页面配置
lang: zh-CN
---

# 页面配置
<span style="background-image: linear-gradient(135deg, #4253d8, #d333ba); -webkit-background-clip: text; color: transparent; font-size: 18px;">该如何新建页面呢？还请容我想想</span>

## 新建页面文件
UniApp Matrix Admin 中新建页面，分为两种情况，因为 UniApp Matrix Admin 在初始时就已经将项目进行分包处理，所以新建页面分为，`主包页面` 和 `分包页面`，如果您不需要进行分面处理，那么您可以将其删除。虽然进行了分包，但新建页面实际都是一样的，只不过位置不同而已。如果页面相关文件过多，您可以创建一个文件夹来放置这些文件。

### 主包页面
```diff
  ├── public
  ├── src
  │   ├── static                # 本地静态资源
  :   :
  │   ├── pages                 # 页面组件
+ │   │   └── NewPage.vue       # 新页面文件
or
+ │   │   └── newPage           # 为新页面创建一个文件夹
+ │   │       └── NewPage.vue   # 新页面文件
  :   :
  │   └── main.js               # 应用入口js
  ├── package.json              # package.json
  ├── README.md                 # README.md
  └── vue.config.js             # vue 配置文件
```

### 分包页面
```diff
  ├── public
  ├── src
  │   ├── static                # 本地静态资源
  :   :
  │   ├── pages-module          # 分包页面组件
+ │   │   └── NewPage.vue       # 新分包页面文件
or
+ │   │   └── newPage           # 为分包新页面创建一个文件夹
+ │   │       └── NewPage.vue   # 分包新页面文件
  :   :
  │   └── main.js               # 应用入口js
  ├── package.json              # package.json
  ├── README.md                 # README.md
  └── vue.config.js             # vue 配置文件
```

为了更好地演示，我们初始化 `NewPage.vue` 文件如下：
```vue
<template>
  <view>
    <!-- 自定义 nav-bar 导航栏 -->
    <u-navbar :is-back="false" :title="headerTitle" :background="background" title-color="#fff" />

    <view class="page-content">
      <view class="u-page">
        <!-- 所有内容的容器 -->
        <hello-world title="NewPage 页面" />
      </view>
    </view>

    <!-- 自定义 tab-bar 底部导航栏，与包裹页面所有内容的元素u-page同级，且在它的下方 -->
    <u-tabbar :list="useRoutes" :mid-button="true" />
  </view>
</template>

<script>
  import HelloWorld from '@comp/HelloWorld.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: { HelloWorld },
    data() {
      return {
        // 标题
        headerTitle: '',
        // 自定义 navBar 导航样式
        background: {
          'background-image': 'linear-gradient(45deg, rgb(244, 63, 59), rgb(236, 0, 140))'
        }
      }
    },
    computed: {
      ...mapGetters('user', ['useRoutes'])
    },
    onLoad() {
      this.headerTitle = this.$Route.meta.title
    }
  }
</script>

<style lang="scss" scoped>
  .page-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
```

## 配置路由
路由配置在 `src/router/module/*.js` 文件中(路由已实现分模块管理，请根据您当前页面所在的模块，去添加页面路由)，我们把上面创建的页面文件加入路由配置中。例如，您将要新建一个订单页面：

- 主包页面
```js {2-9}
const routes = [
  {
    path: '/pages/order/index',
    aliasPath: '/order',
    name: 'order',
    meta: {
      title: '订单-主包页面'
    }
  }
]
```

- 分包页面
```js {10-17}
const routes = [
  {
    path: '/pages/order/index',
    aliasPath: '/order',
    name: 'order',
    meta: {
      title: '订单-主包页面'
    }
  },
  {
    path: '/pages-order/pages/module/index',
    aliasPath: '/order/index',
    name: 'order-index',
    meta: {
      title: '订单-分包页面'
    }
  }
]
```

:::warning 注意事项
`path` 路径必须以 `/` 开头。<br />
如果您当前新建的是分包页面，则 `path` 路径，必须要带上您的分包名称，否则将会找不到你的页面地址，无法进行跳转。
:::