<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/"><i class="fas fa-helicopter me-2"></i>Shopper</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Products</router-link>
          </li>
          <li class="nav-item dropdown"  v-if="loggedIn">
            <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fas fa-user"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li class="d-flex justify-content-center border-bottom mb-2 pb-2">
                <router-link class="user" to="/user" >Saved carts</router-link>
              </li>
              <li class="d-flex justify-content-center">
                <a class="user" href="#" @click="logout">Logout</a>
              </li>
            </ul>
          </li>
          <li class="nav-item" v-if="!loggedIn">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fas fa-shopping-cart"></i>
              <span v-show="cartItemCount" class="badge rounded-pill badge-notification bg-danger ">{{ cartItemCount }}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
              <ShoppingCart />
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ShoppingCart from '../ShoppingCart/ShoppingCart'

export default {
  components: { ShoppingCart },
  computed: {
    ...mapGetters(['cartItemCount', 'loggedIn'])
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style scoped>
  .shopping-cart {
    min-width: 450px;
  }
  .user {
    text-decoration: none;
    color: #000;
  }
</style>