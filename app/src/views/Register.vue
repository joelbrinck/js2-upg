<template>
  <div class="container">
    <div class="row justify-content-center">
      <h2 class="text-center mt-5">Register</h2>
      <form class="col-6 mt-2" @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="firstName" class="form-label">First name</label>
          <input type="text" class="form-control" id="firstName" v-model="user.firstName">
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Last name</label>
          <input type="text" class="form-control" id="lastName" v-model="user.lastName">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" v-model="user.email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="user.password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    onSubmit(){
      if(this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '') {
        this.register(this.user)
      }
    }
  }
}
</script>

<style>

</style>