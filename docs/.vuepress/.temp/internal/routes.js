export const redirects = JSON.parse("{\"/About%20us.html\":\"/article/all7eswz/\",\"/Get-Started.html\":\"/article/e70wqqy7/\",\"/Product.html\":\"/article/ov7wxmpl/\",\"/README.copy.html\":\"/article/40fdw95c/\"}")

export const routes = Object.fromEntries([
  ["/article/all7eswz/", { loader: () => import(/* webpackChunkName: "article_all7eswz_index.html" */"/cloudide/workspace/vuepress/docs/.vuepress/.temp/pages/article/all7eswz/index.html.js"), meta: {"title":"about-us"} }],
  ["/article/e70wqqy7/", { loader: () => import(/* webpackChunkName: "article_e70wqqy7_index.html" */"/cloudide/workspace/vuepress/docs/.vuepress/.temp/pages/article/e70wqqy7/index.html.js"), meta: {"title":"get-started"} }],
  ["/article/ov7wxmpl/", { loader: () => import(/* webpackChunkName: "article_ov7wxmpl_index.html" */"/cloudide/workspace/vuepress/docs/.vuepress/.temp/pages/article/ov7wxmpl/index.html.js"), meta: {"title":"product"} }],
  ["/article/40fdw95c/", { loader: () => import(/* webpackChunkName: "article_40fdw95c_index.html" */"/cloudide/workspace/vuepress/docs/.vuepress/.temp/pages/article/40fdw95c/index.html.js"), meta: {"title":"Home"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/cloudide/workspace/vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/cloudide/workspace/vuepress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"/cloudide/workspace/vuepress/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"/cloudide/workspace/vuepress/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"Tags"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"/cloudide/workspace/vuepress/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"Archives"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"/cloudide/workspace/vuepress/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"Categories"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
