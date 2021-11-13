---
home: true
heroImage: /logo.png
actionText: 快速上手 →
actionLink: /guide/introduce

features:
  - title: 💡 极速的服务启动
    details: 使用原生 ESM 文件，无需打包!
  - title: ⚡️ 轻量快速的热重载
    details: 无论应用程序大小如何，都始终极快的模块热重载（HMR）
  - title: 📦 优化的构建
    details: 可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建
  - title: 📝 简洁
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: 👔 优雅
    details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件。
  - title: 📱 多端发布
    details: 是一个使用 Vue.js 开发所有前端应用的框架，一套代码可发布到多个平台。
footer: MIT Licensed | Copyright © 2021-present Matrix
---

<script setup>
import fetchReleaseTag from './.vitepress/theme/fetchReleaseTag.js'

fetchReleaseTag()
</script>
