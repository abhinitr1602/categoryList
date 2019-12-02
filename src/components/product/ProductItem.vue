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
  .product {
    background: #FFF;
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;
  }

  .product .product__description,
  .product .product__action {
    transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
  }

  .product:hover .product__description {
    transform: translateY(-40px);
  }

  .product:hover .product__action {
    transform: none;
  }

  .product-link {
    display: block;
    color: #3D3D3D;
  }

  .product-link:hover {
    color: #3D3D3D;
    text-decoration: none;
  }

  .product .product__image {
    width: 100%;
  }

  .product__image img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 225px;
  }

  .product__description {
    width: 100%;
    display: flex;
    padding: 20px 20px 15px;
    background: #FFF;
  }

  .product__info {
    flex: 2;
  }

  .product__description small {
    color: #808080;
  }

  .product__description h4 {
    margin: 3px 0 5px 0;
  }

  .product__price-cart {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #51D2B7;
  }
  .product__price-dicountcart {
    color: #51D2B7 !important;
  }
  .product__price-cart p {
    flex-grow: 2;
    font-size: 20px;
    font-weight: bold;
  }

  .product__action {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
  }
  .product__action div {
    text-align:center;
  }
</style>
