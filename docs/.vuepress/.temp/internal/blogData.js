export const blogPostData = [{"path":"/.~Product.html","title":"","categoryList":[],"createTime":"Invalid Date","lang":"en-US","excerpt":""},{"path":"/article/40fdw95c/","title":"Home","categoryList":[],"createTime":"2024/12/22 09:31:47","lang":"en-US","excerpt":""},{"path":"/article/ov7wxmpl/","title":"product","categoryList":[],"createTime":"2024/12/22 06:23:13","lang":"en-US","excerpt":""},{"path":"/article/all7eswz/","title":"about-us","categoryList":[],"createTime":"2024/12/22 06:18:04","lang":"en-US","excerpt":""},{"path":"/article/e70wqqy7/","title":"get-started","categoryList":[],"createTime":"2024/12/22 06:14:34","lang":"en-US","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
