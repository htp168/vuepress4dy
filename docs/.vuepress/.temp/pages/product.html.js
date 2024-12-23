import comp from "/cloudide/workspace/vuepress/docs/.vuepress/.temp/pages/product.html.vue"
const data = JSON.parse("{\"path\":\"/product.html\",\"title\":\"Product\",\"lang\":\"en-US\",\"frontmatter\":{\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":\"product.md\"}")
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
