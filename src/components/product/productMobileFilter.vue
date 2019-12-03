<template>
  <div class="full">
    <div class="col-lg-12 col-md-12 ccol-sm-12 col-xs-12 brd-bottom">
      <ul class="list-inline mobile-filter">
        <li @click="sortItem">
          <h4>
            <b><i class="fa fa-sort"></i> Sort</b>
          </h4>
        </li>
        <li @click="filterItem">
          <h4>
            <b><i class="fa fa-filter"></i> Filter</b>
          </h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    sortItem () {
      var sortproduct = false
      sortproduct = !sortproduct
      this.$root.$emit('showSort', {showSort: sortproduct})
    },
    filterItem () {
      console.log('hell')
      var filterProduct = false
      filterProduct = !filterProduct
      this.$root.$emit('showFilter ', {showFilter: filterProduct})
    }
  }
}
</script>
<style>
.mobile-filter {
  float: left;
  width: 100%;
}
.brd-bottom {
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  margin: 5% 0;
}
ul.list-inline.mobile-filter li {
  width: 49%;
  text-align: center;
}
.mobile-filter li:nth-child(1) {
  border-right: 1px solid lightgray;
}
</style>
