<template>
  <div>
    <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product.id" :item="item" />
    <div v-if="shoppingCart.length < 1" class="cart-item">
      <div class="p-2 d-flex justify-content-center align-items-center">
        Your cart is empty
      </div>
      <div class="dropdown-divider"></div>
    </div>
    <div class="p-2 d-flex justify-content-between align-items-center">
      <div class="ms-2">
        <div class="total-price">
          Total: <span class="ms-1">{{ sumOfCart }} SEK</span>
        </div>
        <small class="text-muted">incl. tax</small>
      </div>
      <button class="btn btn-dark" v-show="loggedIn && shoppingCart.length >= 1" @click="saveCart(shoppingCart)">Save Cart</button>
      <button class="btn btn-dark " v-show="!loggedIn" ><router-link to="/login" class="login"> Log in to save cart</router-link></button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ShoppingCartProduct from './ShoppingCartProduct'
export default {
  components:{
    ShoppingCartProduct
  },
  methods: {
    ...mapActions(['saveCart'])
  },
  computed: {
    ...mapGetters(['shoppingCart', 'sumOfCart', 'loggedIn', 'carts'])
  }
}
</script>

<style scoped>
  .login {
    text-decoration: none;
    color: #fff;
  }
</style>