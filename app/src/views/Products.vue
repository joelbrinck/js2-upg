<template>
  <div class="container mt-5">
    <ProductGrid />
  </div>
</template>

<script>
import ProductGrid from '../components/Products/ProductGrid'
import { mapActions } from 'vuex'
export default {
  components: { ProductGrid },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
}
</script>

<style>

</style>