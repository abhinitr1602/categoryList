<template>
  <div class="d-flex justify-content-center my-4">
    <form class="range-field w-25 fullwidth">
      <ul class="list-inline fullwidth">
        <li><span class="font-weight-bold indigo-text mr-2 mt-1">100</span></li>
        <li style="width:67%;">
          <input
            class="border-0"
            v-model="price"
            type="range"
            min="100"
            max="10000"
          />
        </li>
        <li>
          <span class="font-weight-bold indigo-text ml-2 mt-1">10000</span>
        </li>
      </ul>
      <ul class="list-inline text-center col-lg-12" style="margin-top:5%;">
        <li>
          <button class="btn btn-round btn-primary btn-sm" @click="applyRange">
            Apply
          </button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import { PRICE_RANGE } from '../../store/mutation-types'
export default {
  data () {
    return {
      price: '10000'
    }
  },
  methods: {
    applyRange () {
      console.log(this.price)
      this.$store.dispatch('allProductsByPriceRange', this.price)
      this.$store.commit(PRICE_RANGE, parseInt(this.price))
    }
  }
}
</script>
<style>
.fullwidth {
  float: left;
  width: 100%;
  margin-top: 11%;
}
.btn-round {
  border-radius: 15px;
}
</style>
