import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _32b0a3f4 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0f21b066 = () => interopDefault(import('../pages/account.vue' /* webpackChunkName: "pages/account" */))
const _37cedcc8 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _0c4666af = () => interopDefault(import('../pages/article.vue' /* webpackChunkName: "pages/article" */))
const _ff9bdf58 = () => interopDefault(import('../pages/articles.vue' /* webpackChunkName: "pages/articles" */))
const _441dce4e = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _4b4f0a49 = () => interopDefault(import('../pages/drafts.vue' /* webpackChunkName: "pages/drafts" */))
const _3ee4bb44 = () => interopDefault(import('../pages/editor.vue' /* webpackChunkName: "pages/editor" */))
const _158a2d14 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _5ff1a83c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _a2211968 = () => interopDefault(import('../pages/posts.vue' /* webpackChunkName: "pages/posts" */))
const _715069ff = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _3c34dac8 = () => interopDefault(import('../pages/SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _065f88cb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _32b0a3f4,
      name: "about"
    }, {
      path: "/account",
      component: _0f21b066,
      name: "account"
    }, {
      path: "/admin",
      component: _37cedcc8,
      name: "admin"
    }, {
      path: "/article",
      component: _0c4666af,
      name: "article"
    }, {
      path: "/articles",
      component: _ff9bdf58,
      name: "articles"
    }, {
      path: "/contact",
      component: _441dce4e,
      name: "contact"
    }, {
      path: "/drafts",
      component: _4b4f0a49,
      name: "drafts"
    }, {
      path: "/editor",
      component: _3ee4bb44,
      name: "editor"
    }, {
      path: "/home",
      component: _158a2d14,
      name: "home"
    }, {
      path: "/login",
      component: _5ff1a83c,
      name: "login"
    }, {
      path: "/posts",
      component: _a2211968,
      name: "posts"
    }, {
      path: "/search",
      component: _715069ff,
      name: "search"
    }, {
      path: "/SearchResult",
      component: _3c34dac8,
      name: "SearchResult"
    }, {
      path: "/",
      component: _065f88cb,
      name: "index"
    }],

    fallback: false
  })
}
