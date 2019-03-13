// import Vue from 'vue'
// import Vuex from 'vuex'
// import actions from './actions.js'
// import getters from './getters.js'
// import mutations from './mutations.js'

// Vue.use(Vuex)

export default () => ({
    user: {},
    headline: {},
    isLoading: false,
    moreArticle: true,
    loadMore: false,
    isSaving: false,
    noMore: false,
    dialog: {
        show: false,
        hasTwoBtn: false,
        info: 'hey',
        resolveFn: () => {},
        rejectFn: () => {}
    },
    tags: [],
    curTag: '',
    article: {},
    articles: [],
    draft: {},
    drafts: {},
    comments: []
})

// export const mutations = mutations

// export const getters = getters

// export const actions = actions

// const store = new Vuex.Store({
//     state: {
//         user: {},
//         headline: {},
//         isLoading: false,
//         moreArticle: true,
//         loadMore: false,
//         isSaving: false,
//         noMore: false,
//         dialog: {
//             show: false,
//             hasTwoBtn: false,
//             info: 'hey',
//             resolveFn: () => {},
//             rejectFn: () => {}
//         },
//         tags: [],
//         curTag: '',
//         article: {},
//         articles: [],
//         draft: {},
//         drafts: {},
//         comments: []
//     },
//     getters,
//     actions,
//     mutations
// })
// export default store
