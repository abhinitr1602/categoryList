<template>
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div v-if="cart.length > 0">
      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <template v-for="product in addedProducts">
          <product-details
            :product="product"
            :key="product.id"
          ></product-details>
        </template>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="full-width product-pricing">
          <h4 class="prc-amnt "><b>Price Details</b></h4>
          <h5>
            <span class="col-lg-6 col-md-6 col-sm-12 col-xs-12">Price ({{ addedProducts.length }} item) : </span><span class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right"><i class="fa fa-inr"></i>
            {{ selectedItemPrice }}</span>
          </h5><br />
          <h5><span class="col-lg-6 col-md-6 col-sm-12 col-xs-12">Discount : </span><span class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right"><i class="fa fa-inr"></i> {{ discountAmount }}</span></h5>
          <br />
          <h4 class="tot-amnt"><span class="col-lg-6 col-md-6 col-sm-12 col-xs-12">Total payable</span> <span class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right"><i class="fa fa-inr"></i> {{ selectedItemPrice }}</span></h4>
        </div>
      </div>
    </div>
    <div v-else class="title">
      <h1><i class="fa fa-superpowers"></i> Your Cart is Empty</h1>
    </div>
  </div>
</template>

<script>
import ProductDetails from '../components/product/ProductDetails'
export default {
  data () {
    return {
      cart: this.$store.state.cart,
      productPayment: []
    }
  },
  components: {
    productDetails: ProductDetails
  },
  computed: {
    addedProducts () {
      var outArr = []
      var cart = Object.assign([], this.$store.state.cart)
      for (var i = 0; i < cart.length; i++) {
        if (outArr.indexOf(cart[i]) === -1) {
          outArr.push(cart[i])
        }
      }
      return outArr
    },
    selectedItemPrice () {
      return this.$store.state.cart.reduce(
        (current, next) => current + next.price,
        0
      )
    },
    discountAmount () {
      var deductedPrice = this.$store.state.cart.reduce(
        (current, next) => current + next.price,
        0
      )
      var productDiscountPrice = []
      var actualPrice = this.$store.state.cart
      for (var i = 0; i < actualPrice.length; i++) {
        var item = actualPrice[i]
        productDiscountPrice.push(
          item.price + item.price * ((item.discount ? item.discount : 0) / 100)
        )
      }
      var eachItemDiscount = productDiscountPrice.reduce(
        (current, next) => current + next,
        0
      )
      return eachItemDiscount - deductedPrice
    }
  }
}
</script>
<style>
.full-width {
  float: left;
  width: 100%;
}
.product-pricing{
  padding: 10%;border:1px solid lightgray;margin-top:10px;
}
.tot-amnt {
  padding-top:10px;border-top:1px solid lightgray;
}
.prc-amnt {
  padding-bottom:10px;border-bottom:1px solid lightgray;
}
</style>
