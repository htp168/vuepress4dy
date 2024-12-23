import comp from "/cloudide/workspace/vuepress/docs/.vuepress/.temp/pages/about-us.html.vue"
const data = JSON.parse("{\"path\":\"/about-us.html\",\"title\":\"About US\",\"lang\":\"en-US\",\"frontmatter\":{\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"About us\",\"slug\":\"about-us-1\",\"link\":\"#about-us-1\",\"children\":[]},{\"level\":2,\"title\":\"Certificate of honor\",\"slug\":\"certificate-of-honor\",\"link\":\"#certificate-of-honor\",\"children\":[]},{\"level\":2,\"title\":\"Contact Us\",\"slug\":\"contact-us\",\"link\":\"#contact-us\",\"children\":[]}],\"readingTime\":{\"minutes\":0.03,\"words\":9},\"filePathRelative\":\"about-us.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
