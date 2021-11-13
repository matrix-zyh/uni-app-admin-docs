import{_ as n,c as s,o as a,d as e}from"./app.28458000.js";const p='{"title":"使用","description":"","frontmatter":{"title":"使用","lang":"zh-CN"},"headers":[{"level":2,"title":"前言","slug":"前言"},{"level":2,"title":"准备","slug":"准备"},{"level":2,"title":"代码获取","slug":"代码获取"},{"level":3,"title":"从 GitHub 获取代码","slug":"从-github-获取代码"},{"level":3,"title":"从 Gitee 获取代码","slug":"从-gitee-获取代码"},{"level":2,"title":"npm script","slug":"npm-script"},{"level":2,"title":"目录","slug":"目录"}],"relativePath":"guide/use.md","lastUpdated":1636812404329}',t={},l=[e('<h1 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h1><p><span style="background-image:linear-gradient(135deg, #4253d8, #d333ba);-webkit-background-clip:text;color:transparent;font-size:18px;">奔跑吧，程序员</span></p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">关于组件</p><p>项目可能会二次封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写，不必坚持使用项目自带的组件。</p></div><h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-hidden="true">#</a></h2><p>你的本地环境需要安装 <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn1.x</a>、<a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> 和 <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a>。我们的技术栈基于 <a href="https://www.babeljs.cn/docs/learn.html" target="_blank" rel="noopener noreferrer">ES2015+</a>、<a href="https://cn.vuejs.org/v2/guide/" target="_blank" rel="noopener noreferrer">Vue2</a>、<a href="https://github.com/weilanwl/ColorUI" target="_blank" rel="noopener noreferrer">Color UI</a>、<a href="https://www.uviewui.com/" target="_blank" rel="noopener noreferrer">uView UI</a>，提前学习这些知识会非常有帮助。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><ul><li>强烈建议使用<a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn1.x</a>，否则依赖可能不兼容，请自行解决。</li><li><a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> 版本要求 <code>12.x</code> 以上，且不能为 <code>13.x</code> 或者超过 <code>14.x</code> 版本，这里推荐 <code>14.x</code> 。</li><li>如果你需要同时存在多个 node 版本，可以使用 <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">Nvm</a> 或者其他工具进行 Node.js 进行版本管理。</li></ul></div><h2 id="代码获取" tabindex="-1">代码获取 <a class="header-anchor" href="#代码获取" aria-hidden="true">#</a></h2><h3 id="从-github-获取代码" tabindex="-1">从 GitHub 获取代码 <a class="header-anchor" href="#从-github-获取代码" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><pre><code><span class="token comment"># 演示版</span>\n$ <span class="token function">git</span> clone https://github.com/matrix-zyh/uni-app-matrix-admin\n\n<span class="token comment"># 精简版</span>\n$ <span class="token function">git</span> clone https://github.com/matrix-zyh/uni-app-admin-lite\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="从-gitee-获取代码" tabindex="-1">从 Gitee 获取代码 <a class="header-anchor" href="#从-gitee-获取代码" aria-hidden="true">#</a></h3><p>如果从 github clone 代码较慢的话，可以尝试用 <a href="https://gitee.com/" target="_blank" rel="noopener noreferrer">Gitee</a> 同步代码到自己的仓库，再 clone 下来即可。</p><p>也可以通过下方地址进行 clone</p><div class="language-bash line-numbers-mode"><pre><code><span class="token comment"># 演示版</span>\n$ <span class="token function">git</span> clone https://gitee.com/matrix-zyh/uni-app-matrix-admin\n\n<span class="token comment"># 精简版</span>\n$ <span class="token function">git</span> clone https://gitee.com/matrix-zyh/uni-app-admin-lite\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="npm-script" tabindex="-1">npm script <a class="header-anchor" href="#npm-script" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><pre><code><span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>\n  <span class="token comment"># 运行微信小程序 (开发环境)</span>\n  <span class="token string">&quot;serve&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run dev:wechat&quot;</span>,\n  <span class="token comment"># 打包微信小程序 (生产环境)</span>\n  <span class="token string">&quot;build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run build:prod-wechat&quot;</span>,\n  <span class="token comment"># 运行微信小程序 (开发环境)</span>\n  <span class="token string">&quot;dev:wechat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=dev UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch&quot;</span>,\n  <span class="token comment"># 运行微信小程序 (预览环境)</span>\n  <span class="token string">&quot;prev:wechat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=prev UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch&quot;</span>,\n  <span class="token comment"># 运行微信小程序 (生产环境)</span>\n  <span class="token string">&quot;prod:wechat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=prod UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch&quot;</span>,\n  <span class="token comment"># 打包微信小程序 (开发环境)</span>\n  <span class="token string">&quot;build:dev-wechat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=dev UNI_PLATFORM=mp-weixin vue-cli-service uni-build&quot;</span>,\n  <span class="token comment"># 打包微信小程序 (预览环境)</span>\n  <span class="token string">&quot;build:prev-wechat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=prev UNI_PLATFORM=mp-weixin vue-cli-service uni-build&quot;</span>,\n  <span class="token comment"># 打包微信小程序 (生产环境)</span>\n  <span class="token string">&quot;build:prod-wechat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=prod UNI_PLATFORM=mp-weixin vue-cli-service uni-build&quot;</span>,\n  <span class="token comment"># 运行 H5 (开发环境)</span>\n  <span class="token string">&quot;dev:h5&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=dev UNI_PLATFORM=h5 vue-cli-service uni-serve&quot;</span>,\n  <span class="token comment"># 运行 H5 (预览环境)</span>\n  <span class="token string">&quot;prev:h5&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=prev UNI_PLATFORM=h5 vue-cli-service uni-serve&quot;</span>,\n  <span class="token comment"># 运行 H5 (生产环境)</span>\n  <span class="token string">&quot;prod:h5&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=prod UNI_PLATFORM=h5 vue-cli-service uni-serve&quot;</span>,\n  <span class="token comment"># 打包 H5 (开发环境)</span>\n  <span class="token string">&quot;build:dev-h5&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=dev UNI_PLATFORM=h5 vue-cli-service uni-build&quot;</span>,\n  <span class="token comment"># 打包 H5 (预览环境)</span>\n  <span class="token string">&quot;build:prev-h5&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=prev UNI_PLATFORM=h5 vue-cli-service uni-build&quot;</span>,\n  <span class="token comment"># 打包 H5 (生产环境)</span>\n  <span class="token string">&quot;build:prod-h5&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=prod UNI_PLATFORM=h5 vue-cli-service uni-build&quot;</span>,\n  <span class="token comment"># 运行 App (开发环境)</span>\n  <span class="token string">&quot;dev:app&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=dev UNI_PLATFORM=app-plus vue-cli-service uni-build --watch&quot;</span>,\n  <span class="token comment"># 运行 App (预览环境)</span>\n  <span class="token string">&quot;prev:app&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=prev UNI_PLATFORM=app-plus vue-cli-service uni-build --watch&quot;</span>,\n  <span class="token comment"># 运行 App (生产环境)</span>\n  <span class="token string">&quot;prod:app&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=prod UNI_PLATFORM=app-plus vue-cli-service uni-build --watch&quot;</span>,\n  <span class="token comment"># 打包 App (开发环境)</span>\n  <span class="token string">&quot;build:dev-app&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=dev UNI_PLATFORM=app-plus vue-cli-service uni-build&quot;</span>,\n  <span class="token comment"># 打包 App (预览环境)</span>\n  <span class="token string">&quot;build:prev-app&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=prev UNI_PLATFORM=app-plus vue-cli-service uni-build&quot;</span>,\n  <span class="token comment"># 打包 App (生产环境)</span>\n  <span class="token string">&quot;build:prod-app&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=prod UNI_PLATFORM=app-plus vue-cli-service uni-build&quot;</span>,\n  <span class="token comment"># Eslint 格式化代码</span>\n  <span class="token string">&quot;lint:eslint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;eslint --fix --ext <span class="token entity" title="\\&quot;">\\&quot;</span>src/**/*.{vue,less,css,scss}<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>,\n  <span class="token comment"># Prettier 格式化代码</span>\n  <span class="token string">&quot;lint:prettier&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;prettier --write --loglevel warn <span class="token entity" title="\\&quot;">\\&quot;</span>src/**/*.{js,json,tsx,css,less,scss,vue,html,md}<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>,\n  <span class="token comment"># Stylelint 格式化代码</span>\n  <span class="token string">&quot;lint:stylelint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;stylelint --fix <span class="token entity" title="\\&quot;">\\&quot;</span>**/*.{vue,less,postcss,css,scss}<span class="token entity" title="\\&quot;">\\&quot;</span> --cache --cache-location node_modules/.cache/stylelint/&quot;</span>,\n  <span class="token comment"># Eslint、Prettier、Stylelint 一起执行格式化</span>\n  <span class="token string">&quot;fix&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run lint:eslint &amp;&amp; npm run lint:prettier &amp;&amp; npm run lint:stylelint&quot;</span>\n  <span class="token punctuation">}</span>,\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-hidden="true">#</a></h2><p>我们已经为你生成了一个完整的开发框架，提供了涵盖移动端开发的各类功能和坑位，下面是整个项目的目录结构。</p><div class="language-bash line-numbers-mode"><pre><code>├── public\n│   └── index.html              <span class="token comment"># 入口 HTML</span>\n├── src\n│   ├── api                     <span class="token comment"># api</span>\n│   │   ├── interface           <span class="token comment"># api 接口统一管理 (模块化)</span>\n│   │   └── services            <span class="token comment"># api 请求统一管理 (模块化)</span>\n│   ├── components              <span class="token comment"># 内置通用组件 (跨包使用的组件)</span>\n│   │   └── HelloWorld.vue      <span class="token comment"># HelloWorld 组件 (例子)</span>\n│   ├── config                  <span class="token comment"># 全局配置</span>\n│   │   └── env.js              <span class="token comment"># 公共配置文件入口</span>\n│   │   ├── env.dev.js          <span class="token comment"># dev 开发环境</span>\n│   │   ├── env.prev.js         <span class="token comment"># prev 预发布环境</span>\n│   │   ├── env.prod.js         <span class="token comment"># prod 生产环境</span>\n│   ├── http                    <span class="token comment"># http 请求</span>\n│   │   ├── baseUrl.js          <span class="token comment"># http 请求域名统一前缀</span>\n│   │   └── interceptors.js     <span class="token comment"># http 拦截器</span>\n│   │   ├── request.js          <span class="token comment"># http 入口文件</span>\n│   ├── mixin                   <span class="token comment"># mixin 混入</span>\n│   │   └── global-mixin.js     <span class="token comment"># 全局 mixin 混入文件</span>\n│   ├── pages                   <span class="token comment"># 页面</span>\n│   │   ├── login               <span class="token comment"># 登录页</span>\n│   │   ├── home                <span class="token comment"># pages-home 的主包页面</span>\n│   │   ├── mine                <span class="token comment"># pages-mine 的主包页面</span>\n│   │   └── exception           <span class="token comment"># 异常页</span>\n│   ├── pages-home              <span class="token comment"># home 的分包页面</span>\n│   │   └── pages               <span class="token comment"># 模拟 pages 文件结构</span>\n│   │       └── module          <span class="token comment"># 页面所在模块 (如当前是商品页，则为 goods)</span>\n│   │           └── index.vue   <span class="token comment"># 具体页面</span>\n│   ├── pages-mine              <span class="token comment"># mine 的分包页面</span>\n│   │   └── pages               <span class="token comment"># 模拟 pages 文件结构</span>\n│   │       ├── about           <span class="token comment"># 项目介绍模块</span>\n│   │       │   └── index.vue   <span class="token comment"># 具体页面</span>\n│   │       └── log             <span class="token comment"># 更新日志模块</span>\n│   │           └── index.vue   <span class="token comment"># 具体页面</span>\n│   ├── router                  <span class="token comment"># 路由配置</span>\n│   │   ├── modules             <span class="token comment"># 路由模块</span>\n│   │   └── index.js            <span class="token comment"># 全局路由配置入口</span>\n│   ├── static                  <span class="token comment"># 本地静态资源</span>\n│   │   ├── css                 <span class="token comment"># css 全局样式</span>\n│   │   │   ├── animation.css   <span class="token comment"># 动画 css</span>\n│   │   │   ├── global.css      <span class="token comment"># 全局自定义 css</span>\n│   │   │   ├── icon.css        <span class="token comment"># iconfont 自定义图库</span>\n│   │   │   └── main.css        <span class="token comment"># Color UI 主样式</span>\n│   │   ├── images              <span class="token comment"># 图片</span>\n│   │   └── scss                <span class="token comment"># scss 全局样式</span>\n│   ├── store                   <span class="token comment"># vuex 状态管理配置</span>\n│   │   ├── modules             <span class="token comment"># vuex 模块</span>\n│   │   │   ├── base.js         <span class="token comment"># user 公共模块信息</span>\n│   │   │   ├── user.js         <span class="token comment"># user 用户模块信息</span>\n│   │   │   └── index.js        <span class="token comment"># 模块入口文件 (用于导出所有模块，vuex已开启命名空间)</span>\n│   │   └── index.js            <span class="token comment"># vuex 入口文件</span>\n│   ├── utils                   <span class="token comment"># js 工具</span>\n│   │   ├── modules             <span class="token comment"># js 工具 需挂载到全局的工具类放到该文件夹下</span>\n│   │   │   ├── loading.js      <span class="token comment"># 全局 封装 loading 请求工具</span>\n│   │   │   ├── log.js          <span class="token comment"># 全局 封装 console 打印工具</span>\n│   │   │   └── tools.js        <span class="token comment"># 全局 封装 tools 常用页面工具</span>\n│   │   ├── cookie.js           <span class="token comment"># js 持久化工具类</span>\n│   │   ├── filterEmpty.js      <span class="token comment"># js 深度删除对象下为空属性字段的工具类</span>\n│   │   ├── tools.js            <span class="token comment"># js 常用工具类方法</span>\n│   │   └── index.js            <span class="token comment"># js 需挂在到全局的工具类入口文件</span>\n│   ├── App.vue                 <span class="token comment"># 应用入口组件</span>\n│   ├── bootstrap.js            <span class="token comment"># 应用启动引导js</span>\n│   ├── main.js                 <span class="token comment"># 应用入口js</span>\n│   ├── manifest.json           <span class="token comment"># 小程序配置文件</span>\n│   ├── page.json               <span class="token comment"># 小程序页面路径配置文件</span>\n│   └── uni.scss                <span class="token comment"># 全局 sass 样式</span>\n├── .eslintrc.js                <span class="token comment"># eslint 校验配置文件</span>\n├── .eslintignore               <span class="token comment"># eslint 忽略文件</span>\n├── .gitignore                  <span class="token comment"># Git 忽略文件</span>\n├── .npmrc                      <span class="token comment"># npm 配置文件，主要用来解决 node-sass 安装失败问题</span>\n├── prettier.config.js          <span class="token comment"># prettier 代码风格配置文件</span>\n├── .prettierignore             <span class="token comment"># prettier 忽略文件</span>\n├── stylelint.config.js         <span class="token comment"># stylelint HTML、CSS 代码风格配置文件</span>\n├── .stylelintignore            <span class="token comment"># stylelint 忽略文件</span>\n├── babel.config.js             <span class="token comment"># babel es6转es5</span>\n├── LICENSE                     <span class="token comment"># 开源项目证书</span>\n├── lint-staged.config.js       <span class="token comment"># 只针对 git add 的文件进行代码校验</span>\n├── postcss.config.js           <span class="token comment"># app、h5 适配配置文件</span>\n├── package.json                <span class="token comment"># package.json</span>\n├── package-lock.json           <span class="token comment"># package.json</span>\n├── vue.config.js               <span class="token comment"># vue 配置文件</span>\n├── README.md                   <span class="token comment"># README.md</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br></div></div>',19)];var c=n(t,[["render",function(n,e,p,t,c,r){return a(),s("div",null,l)}]]);export default c;export{p as __pageData};
