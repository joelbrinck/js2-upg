<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navigation/Navbar.vue'

export default {
  components: { Navbar }
}
</script>
    
<style>
body {
  overflow-y: scroll;
}
</style>
