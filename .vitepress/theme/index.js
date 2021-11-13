import Theme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'page-top-ads': () =>
        h('div', { id: 'wwads-container' }, [
          h('div', {
            class: 'wwads-cn wwads-vertical',
            'data-id': 111,
            style: {
              maxWidth: '150px'
            }
          })
        ])
    })
  }
}
