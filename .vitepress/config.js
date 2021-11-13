// @ts-check

const pkg = require('../package.json')

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: '/uni-app-admin-docs/',
  title: 'UniApp Matrix Admin 文档',
  lang: 'zh-CN',
  description: '快速、高效的移动端跨平台应用',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
    ['script', { src: 'https://cdn.wwads.cn/js/makemoney.js', async: '' }]
  ],
  themeConfig: {
    repo: pkg.repository,
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',

    // algolia: {
    //   apiKey: 'b573aa848fd57fb47d693b531297403c',
    //   indexName: 'vitejs',
    //   searchParameters: {
    //     facetFilters: ['tags:cn']
    //   }
    // },

    nav: [
      // { text: '指引', link: '/guide/introduce' },
      {
        text: '相关链接',
        items: [
          {
            text: 'Admin 演示版源码 - Github',
            link: 'https://github.com/matrix-zyh/uni-app-matrix-admin'
          },
          {
            text: 'Admin 演示版源码 - Gitee',
            link: 'https://gitee.com/matrix-zyh/uni-app-matrix-admin'
          },
          {
            text: 'Admin 精简版源码 - GitHub',
            link: 'https://github.com/matrix-zyh/uni-app-admin-lite'
          },
          {
            text: 'Admin 精简版源码 - Gitee',
            link: 'https://gitee.com/matrix-zyh/uni-app-admin-lite'
          },
          {
            text: 'Admin 文档源码 - Github',
            link: 'https://github.com/matrix-zyh/uni-app-admin-docs'
          },
          {
            text: 'Admin 文档源码 - Gitee',
            link: 'https://gitee.com/matrix-zyh/uni-app-admin-docs'
          },
          {
            text: 'Admin 更新日志 - Github',
            link: 'https://github.com/matrix-zyh/uni-app-admin-lite/blob/master/CHANGELOG.md'
          },
          {
            text: 'Admin 更新日志 - Gitee',
            link: 'https://gitee.com/matrix-zyh/uni-app-admin-lite/blob/master/CHANGELOG.md'
          }
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          text: '指引',
          children: [
            {
              text: '介绍',
              link: '/guide/introduce'
            },
            {
              text: '使用',
              link: '/guide/use'
            }
          ]
        },
        {
          text: '开发',
          children: [
            {
              text: '项目配置',
              link: '/develop/setting'
            },
            {
              text: '页面配置',
              link: '/develop/page'
            },
            {
              text: '路由和菜单',
              link: '/develop/router'
            },
            {
              text: '编程式导航',
              link: '/develop/navigation'
            },
            {
              text: '服务端交互',
              link: '/develop/service'
            }
          ]
        },
        {
          text: '进阶',
          children: [
            {
              text: '拦截器配置',
              link: '/advance/interceptors'
            },
            {
              text: '全局 API',
              link: '/advance/api'
            }
          ]
        },
        {
          text: '其他',
          children: [
            {
              text: '示例',
              link: '/other/example'
            },
            {
              text: '贡献',
              link: '/other/community'
            },
            {
              text: '打赏',
              link: '/other/reward'
            }
          ]
        }
      ]
    }
  },

  markdown: {
    lineNumbers: true,
    anchor: {
      renderPermalink: require('./render-perma-link')
    },
    config: md => {
      md.use(require('./markdown-it-custom-anchor'))
    }
  }
}
