<template>
<div class="full">
  <div class="product-details product-detail-thumbnail">
    <div class="full-width">
      <div class="row">
        <div
          class="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-details__image"
        >
          <img class="img-responsive" src="../../assets/tabFold_2.png" alt="" />
        </div>
        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 product-details__info">
          <div class="product-details__description">
            <small class="col-lg-12 col-md-12 col-sm-12 col-xs-12">{{ product && product.category }}</small>
            <h3 class="col-lg-12 col-md-12 col-sm-12 col-xs-12">{{ product.name }}</h3>
            <!-- <p>
              {{ product.category }}
            </p> -->
          </div>
          <div class="product-details__price-cart">
            <p class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <i class="fa fa-inr"></i>{{ product.price }}&nbsp; 
              <small class="txt-line-through" v-if="product.discount > 0">{{checkdiscoutPrice(product)}}</small> <small v-if="product.discount > 0" class="product__price-dicountcart">
               {{product.discount}}%</small>
            </p>
            <ul class="list-inline col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <li>
                <button
                  class="btn btn-sm btn-default btn-round"
                  @click="deleteitem"
                >
                  <i class="fa fa-minus"></i>
                </button>
              </li>
              <li>
                <h4>{{ getNumber(product) }}</h4>
              </li>
              <li>
                <button
                  class="btn btn-sm btn-default btn-round"
                  @click="additem"
                >
                  <i class="fa fa-plus"></i>
                </button>
              </li>
            </ul>
            <product-button class="col-lg-4 col-md-4 col-sm-12 col-xs-12" :product="product"></product-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ProductButton from './ProductButton'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../store/mutation-types'
export default {
  props: ['product'],
  components: {
    'product-button': ProductButton
  },
  data () {
    return {
      itemNumber: this.$store.state.additem
    }
  },
  mounted () {
    this.itemNumber = this.$store.state.cart
  },
  methods: {
    additem () {
      this.$store.commit(ADD_TO_CART, this.product)
    },
    deleteitem () {
      this.$store.commit(REMOVE_FROM_CART, this.product)
    },
    getNumber (val) {
      return this.itemNumber.filter(function (value) { return value === val }).length
    },
    checkdiscoutPrice (item) {
      return item.price + (item.price * ((item.discount ? item.discount : 0) / 100))
    }
  }
}
</script>

