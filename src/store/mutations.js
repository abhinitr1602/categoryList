// import { productSchema } from './schemas'
// import { normalize } from 'normalizr'
// import merge from "lodash/object/merge"

import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  HIGH_TO_LOW,
  LOW_TO_HIGH,
  DISCOUNT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_MORE,
  REMOVE_SELECTED,
  PRICE_RANGE,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
  ERROR_MSG
} from './mutation-types'

export const productMutations = {
  [ALL_PRODUCTS] (state) {
    state.showLoader = true
    // this[]
  },
  [ALL_PRODUCTS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.products = payload
  },
  [PRODUCT_BY_ID] (state) {
    state.showLoader = true
  },
  [PRODUCT_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = payload
    console.log(state.showLoader)
    // state.product = responseData
  },
  [ADD_PRODUCT]: (state, payload) => {
    state.showLoader = true
  },
  [ADD_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.products.push(payload)
  },
  [UPDATE_PRODUCT]: (state, payload) => {
    state.showLoader = true
  },
  [UPDATE_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.products = state.products.map(p => {
      if (p._id === payload._id) {
        payload = {...payload, manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0]}
        return payload
      }
      return p
    })
  },
  [REMOVE_PRODUCT]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    const index = state.products.findIndex(p => p._id === payload)
    console.debug('index', index)
    state.products.splice(index, 1)
  },
  [ERROR_MSG] (state, payload) {}
}

export const cartMutations = {
  [ADD_TO_CART]: (state, payload) => state.cart.push(payload),
  [REMOVE_FROM_CART]: (state, payload) => {
    const index = state.cart.findIndex(p => p._id === payload)
    state.cart.splice(index, 1)
    console.log(state.cart, state.cart.length, index)
  },
  [ADD_MORE]: (state, payload) => state.addedItems.push(payload),
  [REMOVE_SELECTED]: (state, payload) => {
    const index = state.addedItems.findIndex(p => p.price === payload.price)
    state.addedItems.splice(index, 1)
    console.log(state.addedItems, state.addedItems.length, index)
  }
}

export const priceRangeMutations = {
  [PRICE_RANGE]: (state, payload) => {
    state.showLoader = false
    state.products = payload
  }
}

export const sortMutations = {
  [HIGH_TO_LOW]: (state, payload) => state.products.sort(function (a, b) {
    console.log(payload)
    if (payload === 'high') {
      return b.price - a.price
    }
  }),
  [LOW_TO_HIGH]: (state, payload) => state.products.sort(function (a, b) {
    console.log(payload)
    if (payload === 'low') {
      return a.price - b.price
    }
  }),
  [DISCOUNT]: (state, payload) => state.products.sort(function (a, b) {
    console.log(payload)
    if (payload === 'discount') {
      return b.discount - a.discount
    }
  })
}

export const manufacturerMutations = {
  [ALL_MANUFACTURERS] (state) {
    state.showLoader = true
  },
  [ALL_MANUFACTURERS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.manufacturers = payload
  }
}
