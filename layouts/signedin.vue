<template>
  <v-app>
    <v-system-bar color="red" class="mb-6 pa-7">
      <v-app-bar-title>Foodie</v-app-bar-title>

      <v-tab text color="white" to="/">Home</v-tab>

      <v-tab text color="white">FAQ</v-tab>

      <v-tab text color="white">About Us</v-tab>

      <v-tab text color="white" to="/contact">Contact Us</v-tab>

      <v-tab text color="white">...</v-tab>

      <v-spacer></v-spacer>

      <v-tab text color="white" @click="logout()">Logout</v-tab>
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
  },
  methods: {
      logout(){
          this.$store.commit("user/SET_LOGGED_IN", false)
          this.$store.commit("user/SET_USER", undefined)
          this.$router.push("/")
      }
  },
}
</script>
