<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col>
          <v-card class="justify-center text-center">
            <v-img style="" src="https://firebasestorage.googleapis.com/v0/b/foodie-68d64.appspot.com/o/background_sme_food.jpg?alt=media&token=74f1bc3e-08ce-48cb-9dcf-b5cba9182abe">
              <v-card-title class="justify-center white--text bold">Welcome to SME Food Delivery</v-card-title>
              <v-card-subtitle class="white--text">A website where you can order food to be delivered to your home!</v-card-subtitle>

              <v-card-action class="justify-center text-center">
                <v-btn color="red white--text" to="/register">Make an Account</v-btn>
                <v-btn color="red white--text" to="/signin">Sign In</v-btn>
              </v-card-action>
            </v-img>
            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
