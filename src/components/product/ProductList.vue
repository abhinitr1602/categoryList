<template>
  <div>
    <div class="products">
      <div v-if="products && products.length > 0">
        <template v-for="product in products">
          <product-item :product="product"></product-item>
        </template>
      </div>
      <div v-else class="title">
        <h1><i class="fa fa-superpowers"></i> No product found within this price range</h1>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue'
  export default {
    name: 'product-list',
    created () {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts')
      }
    },
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    },
    data () {
      return {

      }
    },
    components: {
      'product-item': ProductItem
    }
  }
</script>

<style>
  .products {
    background: #F7F8FB;
    padding: 0px 0;
  }
  .fullwidth {
    float:left;width:100%;
  }
</style>
