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
    //   var filterProduct = false
    //   filterProduct = !filterProduct
      this.$root.$emit('showFilter', {showFilter: true})
    }
  }
}
</script>

