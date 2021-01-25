<template>
  <v-app>
    <v-system-bar color="red" class="mb-6 pa-7">
      <v-app-bar-title>Foodie</v-app-bar-title>

      <v-btn text color="white" to="/">Home</v-btn>

      <div v-if="loggedIn">
        <v-btn text color="white" to="/dashboard">Dashboard</v-btn>
      </div>

      <v-btn text color="white" to="/faq">FAQ</v-btn>

      <div v-if="!loggedIn">
        <v-btn text color="white" to="/aboutus">About Us</v-btn>

        <v-btn text color="white" to="/contact">Contact Us</v-btn>
      </div>
      <div>

      </div>

      <v-btn text color="white" to="/restaurants">Restaurants</v-btn>

      <v-spacer></v-spacer>

    <div v-if="!loggedIn">
      <v-btn text color="white" to="/signin">Sign In</v-btn>

      <v-btn text color="white" to="/register">Register</v-btn>
    </div>
    <div v-else>
      <v-btn text color="white" @click="logout()">Logout</v-btn>
    </div>
    </v-system-bar>

    <div>
      <nuxt />
    </div>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

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
  computed: {
    ...mapState({
      user: state => state.user.user.data,
      loggedIn: state => state.user.user.loggedIn
    })
  },
}
</script>


