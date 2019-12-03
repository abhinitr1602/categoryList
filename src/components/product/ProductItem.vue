<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="product">
      <router-link :to="'/details/'+product.id" class="product-link">
        <div class="product__image">
          <img
            class="img-responsive" src="../../assets/tabFold_2.png" alt="">
        </div>
        <div class="product__description">
          <div class="product__info">
            <small>{{product.name}}</small>
            <h4><i class="fa fa-inr"></i> {{product.price}} <small class="txt-line-through" v-if="product.discount > 0">{{checkdiscoutPrice(product)}}</small> <small v-if="product.discount > 0" class="product__price-dicountcart">
            <i class="fa fa-inr"></i>{{product.discount}}%
            </small>
            </h4>
          </div>
        </div>
      </router-link>
      <div class="product__action">
        <product-button :product="product"></product-button>
        <!--<button class="button"><i class="fa fa-cart-plus"></i> Add to Cart</button>-->
      </div>
    </div>
  </div>
</template>

<script>
  import ProductButton from './ProductButton.vue'
  export default {
    data () {
      return {
        productImgUrl: '../../assets/tabFold_2.png'
      }
    },
    name: 'product-item',
    props: ['product'],
    components: {
      'product-button': ProductButton
    },
    methods: {
      checkdiscoutPrice (item) {
        return item.price + (item.price * ((item.discount ? item.discount : 0) / 100))
      }
    }
  }
</script>

<style>
  
</style>
