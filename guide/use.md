---
title: 使用
lang: zh-CN
---

# 使用
<span style="background-image: linear-gradient(135deg, #4253d8, #d333ba); -webkit-background-clip: text; color: transparent; font-size: 18px;">奔跑吧，程序员</span>

## 前言
:::tip 关于组件
项目可能会二次封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写，不必坚持使用项目自带的组件。
:::

## 准备
你的本地环境需要安装 [Yarn1.x](https://yarnpkg.com/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)。我们的技术栈基于 [ES2015+](https://www.babeljs.cn/docs/learn.html)、[Vue2](https://cn.vuejs.org/v2/guide/)、[Color UI](https://github.com/weilanwl/ColorUI)、[uView UI](https://www.uviewui.com/)，提前学习这些知识会非常有帮助。

:::warning 注意
- 强烈建议使用[Yarn1.x](https://yarnpkg.com/)，否则依赖可能不兼容，请自行解决。
- [Node.js](http://nodejs.org/) 版本要求 `12.x` 以上，且不能为 `13.x` 或者超过 `14.x` 版本，这里推荐 `14.x` 。
- 如果你需要同时存在多个 node 版本，可以使用 [Nvm](https://github.com/nvm-sh/nvm) 或者其他工具进行 Node.js 进行版本管理。
:::

## 代码获取

### 从 GitHub 获取代码
```bash
# 演示版
$ git clone https://github.com/matrix-zyh/uni-app-matrix-admin

# 精简版
$ git clone https://github.com/matrix-zyh/uni-app-admin-lite
```

### 从 Gitee 获取代码
如果从 github clone 代码较慢的话，可以尝试用 [Gitee](https://gitee.com/) 同步代码到自己的仓库，再 clone 下来即可。

也可以通过下方地址进行 clone
```bash
# 演示版
$ git clone https://gitee.com/matrix-zyh/uni-app-matrix-admin

# 精简版
$ git clone https://gitee.com/matrix-zyh/uni-app-admin-lite
```

## npm script
```bash
"scripts": {
  # 运行微信小程序 (开发环境)
  "serve": "npm run dev:wechat",
  # 打包微信小程序 (生产环境)
  "build": "npm run build:prod-wechat",
  # 运行微信小程序 (开发环境)
  "dev:wechat": "cross-env NODE_ENV=dev UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch",
  # 运行微信小程序 (预览环境)
  "prev:wechat": "cross-env NODE_ENV=prev UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch",
  # 运行微信小程序 (生产环境)
  "prod:wechat": "cross-env NODE_ENV=prod UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch",
  # 打包微信小程序 (开发环境)
  "build:dev-wechat": "cross-env NODE_ENV=dev UNI_PLATFORM=mp-weixin vue-cli-service uni-build",
  # 打包微信小程序 (预览环境)
  "build:prev-wechat": "cross-env NODE_ENV=prev UNI_PLATFORM=mp-weixin vue-cli-service uni-build",
  # 打包微信小程序 (生产环境)
  "build:prod-wechat": "cross-env NODE_ENV=prod UNI_PLATFORM=mp-weixin vue-cli-service uni-build",
  # 运行 H5 (开发环境)
  "dev:h5": "cross-env NODE_ENV=dev UNI_PLATFORM=h5 vue-cli-service uni-serve",
  # 运行 H5 (预览环境)
  "prev:h5": "cross-env NODE_ENV=prev UNI_PLATFORM=h5 vue-cli-service uni-serve",
  # 运行 H5 (生产环境)
  "prod:h5": "cross-env NODE_ENV=prod UNI_PLATFORM=h5 vue-cli-service uni-serve",
  # 打包 H5 (开发环境)
  "build:dev-h5": "cross-env NODE_ENV=dev UNI_PLATFORM=h5 vue-cli-service uni-build",
  # 打包 H5 (预览环境)
  "build:prev-h5": "cross-env NODE_ENV=prev UNI_PLATFORM=h5 vue-cli-service uni-build",
  # 打包 H5 (生产环境)
  "build:prod-h5": "cross-env NODE_ENV=prod UNI_PLATFORM=h5 vue-cli-service uni-build",
  # 运行 App (开发环境)
  "dev:app": "cross-env NODE_ENV=dev UNI_PLATFORM=app-plus vue-cli-service uni-build --watch",
  # 运行 App (预览环境)
  "prev:app": "cross-env NODE_ENV=prev UNI_PLATFORM=app-plus vue-cli-service uni-build --watch",
  # 运行 App (生产环境)
  "prod:app": "cross-env NODE_ENV=prod UNI_PLATFORM=app-plus vue-cli-service uni-build --watch",
  # 打包 App (开发环境)
  "build:dev-app": "cross-env NODE_ENV=dev UNI_PLATFORM=app-plus vue-cli-service uni-build",
  # 打包 App (预览环境)
  "build:prev-app": "cross-env NODE_ENV=prev UNI_PLATFORM=app-plus vue-cli-service uni-build",
  # 打包 App (生产环境)
  "build:prod-app": "cross-env NODE_ENV=prod UNI_PLATFORM=app-plus vue-cli-service uni-build",
  # Eslint 格式化代码
  "lint:eslint": "eslint --fix --ext \"src/**/*.{vue,less,css,scss}\"",
  # Prettier 格式化代码
  "lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"",
  # Stylelint 格式化代码
  "lint:stylelint": "stylelint --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
  # Eslint、Prettier、Stylelint 一起执行格式化
  "fix": "npm run lint:eslint && npm run lint:prettier && npm run lint:stylelint"
  },
```

## 目录
我们已经为你生成了一个完整的开发框架，提供了涵盖移动端开发的各类功能和坑位，下面是整个项目的目录结构。

```bash
├── public
│   └── index.html              # 入口 HTML
├── src
│   ├── api                     # api
│   │   ├── interface           # api 接口统一管理 (模块化)
│   │   └── services            # api 请求统一管理 (模块化)
│   ├── components              # 内置通用组件 (跨包使用的组件)
│   │   └── HelloWorld.vue      # HelloWorld 组件 (例子)
│   ├── config                  # 全局配置
│   │   └── env.js              # 公共配置文件入口
│   │   ├── env.dev.js          # dev 开发环境
│   │   ├── env.prev.js         # prev 预发布环境
│   │   ├── env.prod.js         # prod 生产环境
│   ├── http                    # http 请求
│   │   ├── baseUrl.js          # http 请求域名统一前缀
│   │   └── interceptors.js     # http 拦截器
│   │   ├── request.js          # http 入口文件
│   ├── mixin                   # mixin 混入
│   │   └── global-mixin.js     # 全局 mixin 混入文件
│   ├── pages                   # 页面
│   │   ├── login               # 登录页
│   │   ├── home                # pages-home 的主包页面
│   │   ├── mine                # pages-mine 的主包页面
│   │   └── exception           # 异常页
│   ├── pages-home              # home 的分包页面
│   │   └── pages               # 模拟 pages 文件结构
│   │       └── module          # 页面所在模块 (如当前是商品页，则为 goods)
│   │           └── index.vue   # 具体页面
│   ├── pages-mine              # mine 的分包页面
│   │   └── pages               # 模拟 pages 文件结构
│   │       ├── about           # 项目介绍模块
│   │       │   └── index.vue   # 具体页面
│   │       └── log             # 更新日志模块
│   │           └── index.vue   # 具体页面
│   ├── router                  # 路由配置
│   │   ├── modules             # 路由模块
│   │   └── index.js            # 全局路由配置入口
│   ├── static                  # 本地静态资源
│   │   ├── css                 # css 全局样式
│   │   │   ├── animation.css   # 动画 css
│   │   │   ├── global.css      # 全局自定义 css
│   │   │   ├── icon.css        # iconfont 自定义图库
│   │   │   └── main.css        # Color UI 主样式
│   │   ├── images              # 图片
│   │   └── scss                # scss 全局样式
│   ├── store                   # vuex 状态管理配置
│   │   ├── modules             # vuex 模块
│   │   │   ├── base.js         # user 公共模块信息
│   │   │   ├── user.js         # user 用户模块信息
│   │   │   └── index.js        # 模块入口文件 (用于导出所有模块，vuex已开启命名空间)
│   │   └── index.js            # vuex 入口文件
│   ├── utils                   # js 工具
│   │   ├── modules             # js 工具 需挂载到全局的工具类放到该文件夹下
│   │   │   ├── loading.js      # 全局 封装 loading 请求工具
│   │   │   ├── log.js          # 全局 封装 console 打印工具
│   │   │   └── tools.js        # 全局 封装 tools 常用页面工具
│   │   ├── cookie.js           # js 持久化工具类
│   │   ├── filterEmpty.js      # js 深度删除对象下为空属性字段的工具类
│   │   ├── tools.js            # js 常用工具类方法
│   │   └── index.js            # js 需挂在到全局的工具类入口文件
│   ├── App.vue                 # 应用入口组件
│   ├── bootstrap.js            # 应用启动引导js
│   ├── main.js                 # 应用入口js
│   ├── manifest.json           # 小程序配置文件
│   ├── page.json               # 小程序页面路径配置文件
│   └── uni.scss                # 全局 sass 样式
├── .eslintrc.js                # eslint 校验配置文件
├── .eslintignore               # eslint 忽略文件
├── .gitignore                  # Git 忽略文件
├── .npmrc                      # npm 配置文件，主要用来解决 node-sass 安装失败问题
├── prettier.config.js          # prettier 代码风格配置文件
├── .prettierignore             # prettier 忽略文件
├── stylelint.config.js         # stylelint HTML、CSS 代码风格配置文件
├── .stylelintignore            # stylelint 忽略文件
├── babel.config.js             # babel es6转es5
├── LICENSE                     # 开源项目证书
├── lint-staged.config.js       # 只针对 git add 的文件进行代码校验
├── postcss.config.js           # app、h5 适配配置文件
├── package.json                # package.json
├── package-lock.json           # package.json
├── vue.config.js               # vue 配置文件
├── README.md                   # README.md
```
