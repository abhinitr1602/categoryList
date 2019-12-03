<template>
  <div class="full pos-rel mg-top-15">
    <ul class="list-inline">
      <li v-bind:class="{ searchField : isSearch }">
        <input type="text" v-model="productitemsearch" v-if="isSearch" />
      </li>
      <li><i class="fa fa-search" @click="isSearch = !isSearch"></i></li>
    </ul>
    <ul class="productSearchedItem" v-if="productitemsearch !== '' && filterInputSearchData.length > 0">
      <li class="searchList" v-for="item in filterInputSearchData" @click="productitemsearch = ''">
        <router-link :to="'/details/'+item.id" class="product-link">
            <h6><img src="../../assets/tabFold_2.png" width="25px"/> {{ item.name }}</h6>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isSearch: false,
      hideSearchedItems: false,
      productitemsearch: '',
      displayedProduct: []
    }
  },
  mounted () {
    this.isSearch = window.screen.width <= 480
  },
  computed: {
    filterInputSearchData () {
      return this.$store.getters.allProducts.filter(data => {
        return (
          data.name
            .toLowerCase()
            .indexOf(this.productitemsearch.toLowerCase()) !== -1
        )
      })
    }
  }
}
</script>
<style>
.mg-top-15{
    margin-top:15px;
}
.searchField input{
    background: transparent;border: 0px;color:#fff;
}
.searchField{
    border-bottom: 1.5px solid #fff;
}
.fa-search {
    color:#fff;
}
</style>
