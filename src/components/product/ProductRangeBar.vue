<template>
  <div class="d-flex justify-content-center my-4">
    <form class="range-field w-25 full lg-screen">
      <h5 class="text-left"><b>Filter By</b></h5>
      <ul class="list-inline full">
        <li><span class="font-weight-bold indigo-text mr-2 mt-1"><i class="fa fa-inr"></i>100</span></li>
        <li style="width:65%;">
          <input
            class="border-0"
            v-model="price"
            type="range"
            min="100"
            max="10000"
          />
        </li>
        <li>
          <span class="font-weight-bold indigo-text ml-2 mt-1"><i class="fa fa-inr"></i>10000</span>
        </li>
      </ul>
      <ul class="list-inline text-center col-lg-12">
        <li class="full"><h6 class="text-center"><i class="fa fa-inr"></i>{{price}}</h6></li>
        <li>
          <button class="btn btn-round btn-primary btn-sm" @click="applyRange">
            Apply
          </button>
        </li>
      </ul>
    </form>
    <div class="sm-screen custom-popup-overlay" v-if="isFilter">
      <div class="custom-popup range-modal">
        <h3 class="text-left"><b>Filter By</b></h3>
        <form class="range-field w-25 full">
          <ul class="list-inline full rangepopup">
            <li><h4 class="font-weight-bold ft-size-24 indigo-text mr-2 mt-1"><i class="fa fa-inr"></i>100</h4></li>
            <li style="width:65%;">
              <input
                class="border-0"
                v-model="price"
                type="range"
                min="100"
                max="10000"
              />
            </li>
            <li>
              <h4 class="font-weight-bold ft-size-24 indigo-text ml-2 mt-1"><i class="fa fa-inr"></i>10000</h4>
            </li>
          </ul>
          <ul class="list-inline text-center col-lg-12 rangepopup" style="margin-top:5%;">
            <li class="full"><h4 class="text-center ft-size-24"><i class="fa fa-inr"></i>{{price}}</h4></li>
            <li>
              <button class="btn btn-round btn-primary btn-lg" @click="applyRange">
                Apply
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { PRICE_RANGE } from '../../store/mutation-types'
export default {
  data () {
    return {
      price: '10000',
      isFilter: false
    }
  },
  created () {
    this.$root.$on('showFilter', (val) => {
      this.isFilter = val.showFilter
    })
  },
  methods: {
    applyRange () {
      console.log(this.price)
      this.$store.dispatch('allProductsByPriceRange', this.price)
      this.$store.commit(PRICE_RANGE, parseInt(this.price))
      this.isFilter = false
    }
  }
}
</script>
<style>
.fullwidth {
  float: left;
  width: 100%;
}
.btn-round {
  border-radius: 15px;
}
</style>
