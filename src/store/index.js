import Vue from 'vue'
import Vuex from 'vuex'

// import { normalize } from 'normalizr'

import { productGetters, manufacturerGetters } from './getters'
import { productMutations, cartMutations, sortMutations, priceRangeMutations, manufacturerMutations } from './mutations'
import { productActions, manufacturerActions } from './actions'
// import actions from './actions'
// import { productsSchema } from './schemas'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    addedItems: [],
    showLoader: false,
    showSort: false,
    showFilter: false,
    product: {},
    products: [],
    manufacturers: []
  },
  mutations: Object.assign({}, productMutations, cartMutations, sortMutations, priceRangeMutations, manufacturerMutations),
  getters: Object.assign({}, productGetters, manufacturerGetters),
  actions: Object.assign({}, productActions, manufacturerActions)
})
