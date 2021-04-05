<template>
  <div class="container">
    <div class="row justify-content-center">
      <h2 class="text-center mt-5">Login</h2>
      <form class="col-6 mt-2" @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary mb-2">Submit</button>
        <p>Not a member? <router-link to="/register">Register</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      if(this.email !== '' && this.password !== '') {
        let user = {
          email: this.email,
          password: this.password
        }

        let route = this.$route.query.redirect
        this.login({ user, route })
      }
    }
  }
}
</script>

<style>

</style>