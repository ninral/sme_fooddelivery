<template>
    <div>
        <v-container>
            <v-row class="justify-center">
                <v-col cols="8">
                    <v-card class="red pa-6 mb-4">
                        <v-card-title class="white--text mb-3">Sign In</v-card-title>

                        <!-- <v-form class="ma-2"> -->
                            <v-text-field class="white--text mb-3" v-model="email" placeholder="Email" :rules="[rules.required, rules.email]"></v-text-field>

                            <v-text-field class="white--text mb-3" v-model="password" placeholder="Password" type="password" :rules="[rules.required]"></v-text-field>

                            <v-card-actions class="justify-center mb-3">
                                <!-- <v-btn @click="signin()" class="white">Sign In</v-btn> -->
                                <v-btn @click.once="signin()">Sign In</v-btn>
                            </v-card-actions>
                        <!-- </v-form> -->
                    </v-card>
                    <v-alert type="error" v-if="error">
                        {{ error }}
                    </v-alert>
                    <v-alert type="success" v-if="success">
                        {{ success }}
                    </v-alert>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
const firebase = require("../api/firebase");

export default {
    data() {
        return {
            email: undefined,
            password: undefined,
            error: "",
            success: "",
            rules: {
                required: value => !!value || 'Required',
                email: value => {
                    const pattern =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail'
                }
            }
        }
    },
    methods: {
        signin(){
            this.success = "processing..."
            // firebase
            //     .auth()
            //     .signInWithEmailAndPassword(this.email, this.password)
            //     .then(data => {
            //         this.success = "Successfully signed in"
            //         this.$router.replace({ name: "Dashboard" })
            //     })
            //     .catch(err => {
            //         this.error = err.message
            //     })
        }  
    },
}
</script>