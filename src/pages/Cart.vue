<template>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
  <div v-if="cart.length > 0">
    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
    <template v-for="product in cart">
      <product-details :product="product" :key="product.id"></product-details>
    </template>
  </div>
  <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
    <div class="full-width">

    </div>
  </div>
  </div>
  <div v-else class="title"><h1><i class="fa fa-superpowers"></i> Your Cart is Empty</h1></div>
</div>
</template>

<script>
  import ProductDetails from '../components/product/ProductDetails'
  export default {
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    components: {
      productDetails: ProductDetails
    }
  }
</script>
<style>
.full-width {
  float: left;width: 100%;
}
</style>
