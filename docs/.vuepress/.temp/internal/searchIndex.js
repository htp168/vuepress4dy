export const SEARCH_INDEX = [
  {
    "title": "",
    "headers": [],
    "path": "/timeline.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/posts.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/friendship-link.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Home",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "about-us",
    "headers": [
      {
        "level": 2,
        "title": "About us",
        "slug": "about-us-1",
        "link": "#about-us-1",
        "children": []
      },
      {
        "level": 2,
        "title": "Certificate of honor",
        "slug": "certificate-of-honor",
        "link": "#certificate-of-honor",
        "children": []
      },
      {
        "level": 2,
        "title": "Contact Us",
        "slug": "contact-us",
        "link": "#contact-us",
        "children": []
      }
    ],
    "path": "/article/all7eswz/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "get-started",
    "headers": [
      {
        "level": 2,
        "title": "Pages",
        "slug": "pages",
        "link": "#pages",
        "children": []
      },
      {
        "level": 2,
        "title": "Content",
        "slug": "content",
        "link": "#content",
        "children": []
      },
      {
        "level": 2,
        "title": "Configuration",
        "slug": "configuration",
        "link": "#configuration",
        "children": []
      },
      {
        "level": 2,
        "title": "Layouts and customization",
        "slug": "layouts-and-customization",
        "link": "#layouts-and-customization",
        "children": []
      }
    ],
    "path": "/article/e70wqqy7/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "product",
    "headers": [],
    "path": "/article/ov7wxmpl/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
