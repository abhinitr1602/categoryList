<template>
  <div class="product-details">
    <div class="full-width">
      <div class="row">
        <div
          class="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-details__image"
        >
          <img class="img-responsive" src="../../assets/tabFold_2.png" alt="" />
        </div>
        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 product-details__info">
          <div class="product-details__description">
            <small>{{ product && product.name }}</small>
            <h3>{{ product.name }}</h3>
            <p>
              {{ product.category }}
            </p>
          </div>
          <div class="product-details__price-cart">
            <p><i class="fa fa-inr"></i>{{ product.price }}</p>
            <ul class="list-inline">
              <li>
                <button
                  class="btn btn-sm btn-default btn-round"
                  @click="deleteitem"
                >
                  -
                </button>
              </li>
              <li>
                <h4>{{ getNumber(product) }}</h4>
              </li>
              <li>
                <button
                  class="btn btn-sm btn-default btn-round"
                  @click="additem"
                >
                  +
                </button>
              </li>
            </ul>
            <product-button :product="product"></product-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductButton from './ProductButton'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../store/mutation-types'
export default {
  props: ['product'],
  components: {
    'product-button': ProductButton
  },
  data () {
    return {
      itemNumber: this.$store.state.additem
    }
  },
  mounted () {
    this.itemNumber = this.$store.state.cart
  },
  methods: {
    additem () {
      this.$store.commit(ADD_TO_CART, this.product)
    },
    deleteitem () {
      this.$store.commit(REMOVE_FROM_CART, this.product)
    },
    getNumber (val) {
      return this.itemNumber.filter(function (value) { return value === val }).length
    }
  }
}
</script>

<style>
.product-details {
  border-bottom: 2px solid #f5f5f5;
  padding: 30px 0;
  float: left;
  width: 100%;
}

.product-details__image {
}

.product-details__description {
  padding-top: 30px;
}

.product-details__description small {
  color: #808080;
}

.product-details__description h3 {
  margin: 5px 0 30px 0;
}

.product-details__price-cart {
  display: flex;
  padding-top: 30px;
}

.product-details__price-cart p {
  flex-grow: 2;
  font-size: 20px;
  font-weight: bold;
}
</style>
