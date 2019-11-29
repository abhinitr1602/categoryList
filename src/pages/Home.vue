<template>
  <div>
    <!-- <div class="title">
      <h1><i class="fa fa-braille"></i> In Stock</h1>
    </div> -->
    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <product-range></product-range>
    </div>
    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
      <product-sort></product-sort>
      <product-list></product-list>
    </div>
  </div>
</template>

<script>
  import ProductList from '../components/product/ProductList.vue'
  import ProductRange from '../components/product/ProductRangeBar.vue'
  import ProductSort from '../components/product/ProductSortList.vue'

  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'product-list': ProductList,
      'product-range': ProductRange,
      'product-sort': ProductSort
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
