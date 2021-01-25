<template>
  <v-app>
    <v-system-bar color="red" class="mb-6 pa-7">
      <v-app-bar-title>Foodie</v-app-bar-title>

      <v-btn text color="white" to="/">Home</v-btn>

      <v-btn text color="white" to="/dashboard">Dashboard</v-btn>

      <v-btn text color="white" to="/settings">Settings</v-btn>

      <!-- <v-btn text color="white" to="/aboutus">About Us</v-btn>

      <v-btn text color="white" to="/contact">Contact Us</v-btn> -->

      <v-btn text color="white" to="/restaurants">Restaurants</v-btn>

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
          let user = undefined
          this.$store.dispatch("user/setUser", { user: undefined, loggedIn: false })
            .then(() => {
              this.$router.push("/")
            })
      }
  },
}
</script>
