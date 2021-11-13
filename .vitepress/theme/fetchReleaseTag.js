import { onMounted } from 'vue'

export default function fetchReleaseTag() {
  onMounted(() => {
    const mainTitle = document.getElementById('main-title')
    mainTitle.style.position = 'relative'
    const docsReleaseTag = document.createElement('span')
    docsReleaseTag.classList.add('release-tag')
    docsReleaseTag.innerText = 'v1.0.0'
    mainTitle.appendChild(docsReleaseTag)
  })
}
