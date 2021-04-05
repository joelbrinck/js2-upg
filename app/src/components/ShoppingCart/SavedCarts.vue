<template>
  <div>
    <div v-if="carts.length">
      <h1 class="text-center">Saved Carts</h1>
      <div v-for="(cart, index) in carts" :key="cart._id" class="border-bottom mt-3">
        <strong> Cart #{{ index+1 }}</strong>
        <div v-for="(item, index) in cart.cart" :key="index" class="d-flex my-3">
          <img :src="item.product.image" alt="..."/>
          <div>
            <div><strong>{{ item.product.name }}</strong></div>
            <div><small>{{ item.quantity }} x {{ item.product.price }} SEK</small></div>
          </div>
        </div>
      </div>
    </div>
      <div v-else>
        <h1 class="text-center mt-5">Save a cart to view it here...</h1>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['carts'])
  },
  methods: {
    ...mapActions(['clearSavedCarts'])
  },
  destroyed() {
    this.clearSavedCarts()
  }
}
</script>

<style scoped>
  img {
    height: 50px;
  }
</style>