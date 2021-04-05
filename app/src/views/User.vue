<template>
  <div class="container mt-5">
    <SavedCarts />
  </div>
</template>

<script>
import SavedCarts from '../components/ShoppingCart/SavedCarts'
import { mapActions } from 'vuex'
export default {
  components: {
    SavedCarts
  },
  methods: {
    ...mapActions(['getCarts'])
  },
  created() {
    this.getCarts()
  }
}
</script>

<style>

</style>