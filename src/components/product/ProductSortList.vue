<template>
  <div class="col-lg-12 col-md-12">
    <ul class="nav nav-pills mb-3 list-inline" id="pills-tab" role="tablist">
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
      linkVal: ''
    }
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
    }
  }
}
</script>
<style>
#pills-tab {
  margin: 3% 0 3% 0;
}
.nav-item a.active {
  color: #333;
  font-weight: bold;
}
</style>
