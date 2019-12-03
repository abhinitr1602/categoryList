<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav__left">
          <li><router-link to="/"><i class="fa fa-star fa-2x"></i></router-link></li>
        </ul>
        <ul class="nav__right list-inline">
          <li><router-link to="/cart"><i class="fa fa-shopping-cart"></i> <span class="badge badge-light badge-danger" v-if="addedProducts > 0">{{addedProducts}}</span></router-link></li>
          <li><product-search></product-search></li>
        </ul>
      </div>
    </nav>
    <router-view class="min-ht"></router-view>
    <nav class="full">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h6 class="text-center">@copyright</h6>
      </div>
    </nav>
    <div class="overlay" v-show="showLoader">
      <div class="loading-spinner">
        <div class="dot dotOne"></div>
        <div class="dot dotTwo"></div>
        <div class="dot dotThree"></div>
      </div>
    </div>
  </div>
</template>

<script>
import toastr from 'toastr'
import ProductSearch from './components/product/ProductSearch.vue'

import {
  ERROR_MSG,
  ADD_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_SUCCESS
} from './store/mutation-types'
export default {
  name: 'app',
  data () {
    return {
      cartItems: this.$store.state.cart
    }
  },
  created () {
    this.$store.subscribe((mutation) => {
      if (mutation.payload) {
        switch (mutation.type) {
          case ERROR_MSG:
            toastr.error(mutation.payload.content, mutation.payload.title)
            break
          case ADD_PRODUCT_SUCCESS:
            toastr.success('Product created.', 'Success!')
            break
          case UPDATE_PRODUCT_SUCCESS:
            toastr.success('Product updated.', 'Success!')
            break
          case REMOVE_PRODUCT_SUCCESS:
            toastr.warning('Product deleted.', 'Deleted!')
            break
        }
      }
    })
  },
  components: {
    'product-search': ProductSearch
  },
  computed: {
    cartItemsCount () {
      return this.cartItems.length
    },
    showLoader () {
      return this.$store.state.showLoader
    },
    addedProducts () {
      var outArr = []
      var cart = Object.assign([], this.$store.state.cart)
      for (var i = 0; i < cart.length; i++) {
        if (outArr.indexOf(cart[i]) === -1) {
          outArr.push(cart[i])
        }
      }
      return outArr.length
    }
  }
}
</script>

