<template>
  <div class="col-lg-12 col-md-12">
    <ul class="nav nav-pills mb-3 list-inline lg-screen" id="pills-tab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="pills-home-tab"
          data-toggle="pill"
          href="#pills-home"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
          ><b>Sort By: </b></a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          v-bind:class="{ active: linkVal === 'high' }"
          @click="sortItem('high')"
          id="pills-home-tab"
          data-toggle="pill"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
          >Price - High Low</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          v-bind:class="{ active: linkVal === 'low' }"
          @click="sortItem('low')"
          id="pills-profile-tab"
          data-toggle="pill"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
          >Price - Low High</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          v-bind:class="{ active: linkVal === 'discount' }"
          @click="sortItem('discount')"
          id="pills-contact-tab"
          data-toggle="pill"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
          >Discount</a
        >
      </li>
    </ul>
    <div class="sm-screen custom-popup-overlay" v-if="isSorted">
      <div class="custom-popup">
        <h4 class="ft-size-24"><b>Sort Options</b></h4>
        <ul class="list-inline custom-filter">
          <li>
            <label class="radio">
              <input type="radio" v-model="sortingValue" value="high" name="sort"/> Price - High Low
            </label>
          </li>
          <li>
            <label class="radio">
              <input type="radio" v-model="sortingValue" value="low" name="sort"/> Price - Low High
            </label>
          </li>
          <li>
            <label class="radio">
              <input type="radio" v-model="sortingValue" value="discount" name="sort"/> Discount
            </label>
          </li>
          <li>
            <div class="text-center"><button class="btn btn-primary btn-lg" @click="sortMobileitem()">Apply</button></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
    DISCOUNT,
    LOW_TO_HIGH,
    HIGH_TO_LOW
  } from '../../store/mutation-types'
export default {
  data () {
    return {
      linkVal: '',
      sortingValue: 'high',
      isSorted: false
    }
  },
  created () {
    this.$root.$on('showSort', (val) => {
      this.isSorted = val.showSort
    })
  },
  methods: {
    sortItem (val) {
      this.linkVal = val
      if (val === 'discount') {
        this.$store.commit(DISCOUNT, val)
      } else if (val === 'low') {
        this.$store.commit(LOW_TO_HIGH, val)
      } else {
        this.$store.commit(HIGH_TO_LOW, val)
      }
    },
    sortMobileitem () {
      // this.linkVal = this.sortingValue
      if (this.sortingValue === 'discount') {
        this.$store.commit(DISCOUNT, this.sortingValue)
      } else if (this.sortingValue === 'low') {
        this.$store.commit(LOW_TO_HIGH, this.sortingValue)
      } else {
        this.$store.commit(HIGH_TO_LOW, this.sortingValue)
      }
      this.isSorted = false
    }
  }
}
</script>

