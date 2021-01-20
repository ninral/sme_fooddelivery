<template>
  <v-app>
    <v-system-bar color="red" class="mb-6 pa-7">
      <v-app-bar-title>Foodie</v-app-bar-title>

      <v-btn text color="white">Home</v-btn>

      <v-btn text color="white" to="/faq">FAQ</v-btn>

      <v-btn text color="white" to="/aboutus">About Us</v-btn>

      <v-btn text color="white">Contact Us</v-btn>

      <v-btn text color="white">...</v-btn>

      <v-spacer></v-spacer>

      <v-btn text color="white" to="/signin">Sign In</v-btn>

      <v-btn text color="white" to="/register">Register</v-btn>
    </v-system-bar>

    <div>
      <nuxt />
    </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
