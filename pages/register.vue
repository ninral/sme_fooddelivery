<template>
    <div>
        <v-container>
            <v-row class="justify-center">
                <v-col cols="8">
                    <v-card class="red pa-6 mb-4">
                        <v-card-title class="white--text mb-3">Register</v-card-title>

                        <v-form class="ma-2">
                            <v-text-field class="white--text mb-3" v-model="name" placeholder="Name" :rules="[rules.required]"></v-text-field>

                            <v-text-field class="white--text mb-3" v-model="email" placeholder="Email" :rules="[rules.required, rules.email]"></v-text-field>

                            <v-text-field class="white--text mb-3" v-model="password" placeholder="Password" type="password" :rules="[rules.required]"></v-text-field>

                            <v-text-field class="white--text mb-3" v-model="confirm_password" placeholder="Confirm Password" type="password" :rules="[rules.required]"></v-text-field>

                            <v-card-actions class="justify-center mb-3">
                                <v-btn v-on:click.prevent="register()">Register</v-btn>
                            </v-card-actions>
                        </v-form>
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
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    data() {
        return {
            name: undefined,
            email: undefined,
            password: undefined,
            confirm_password: undefined,
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
        register(){
            this.error = ""
            this.success = ""
            if(this.name === undefined){
                this.error = "Please add your name"
            } else if(this.password !== this.confirm_password){
                this.error = "Please make sure the two passwords are the same"
            } else {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.email, this.password)
                    .then(data => {
                        data.user.updateProfile({
                            displayName: this.name
                        }).then(() => {
                            firebase.auth().onAuthStateChanged((user) => {
                                if(user) {
                                    this.success = "Successfully registered"
                                    // this.$store.commit('user/SET_LOGGED_IN', true)
                                    // this.$store.commit('user/SET_USER', data.user)
                                    // this.$router.push("/dashboard").catch(() => {})
                                }
                            })
                        })
                    })
                    .catch(err => {
                        this.error = err.message
                    })
            }
        }  
    },
}
</script>