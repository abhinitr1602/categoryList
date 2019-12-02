<template>
  <div>
    <!-- <div class="title">
      <h1><i class="fa fa-braille"></i> In Stock</h1>
    </div> -->
    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <product-range class="lg-screen"></product-range>
    </div>
    <div class="vr-line"></div>
    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12" style="padding-left:0px;">
      <product-filter class="sm-screen"></product-filter>
      <product-sort></product-sort>
      <product-list></product-list>
    </div>
  </div>
</template>

<script>
  import ProductList from '../components/product/ProductList.vue'
  import ProductRange from '../components/product/ProductRangeBar.vue'
  import ProductSort from '../components/product/ProductSortList.vue'
  import ProductFilter from '../components/product/ProductMobileFilter.vue'

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
      'product-filter': ProductFilter,
      'product-sort': ProductSort
    }
  }
</script>

