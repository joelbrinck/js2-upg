<template>
  <div class="container mt-4">
    <div class="p-3 d-flex flex-column align-items-center">
      <img :src="product.image" alt="..."/>
      <div class="d-flex flex-column container-500">
        <h5>{{ product.name }}</h5>
        <p>{{ product.desc }}</p>
        <h1>{{ product.price }} SEK</h1>
        <button class="btn btn-outline-dark" @click="addProductToCart({ product, quantity })">Add to cart</button>
      </div>
    </div>
  </div> 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['getProduct', 'addProductToCart', 'clearProduct'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  mounted() {
    this.getProduct(this.id)
  },
  destroyed() {
    this.clearProduct()
  }
}
</script>

<style scoped>
  .container-500 {
    max-width: 500px;
  }
</style>