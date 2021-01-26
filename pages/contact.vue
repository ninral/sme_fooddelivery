<template>
    <div>
        <v-container>
            <v-row class="justify-center">
                <v-col cols="8">
                    <v-card class="red pa-6 mb-4">
                        <v-card-title class="white--text mb-3">Contact Us by filling the form below</v-card-title>

                        <v-form class="ma-2">
                            <v-text-field class="white--text mb-3" v-model="name" placeholder="Name" :rules="[rules.required]"></v-text-field>

                            <v-text-field class="white--text mb-3" v-model="email" placeholder="Email" :rules="[rules.required, rules.email]"></v-text-field>

                            <v-text-field class="white--text mb-3" v-model="phone" placeholder="Phone Number" :rules="[rules.required]"></v-text-field>

                            <v-textarea class="white--text mb-3" v-model="message" placeholder="Message here..." :rules="[rules.required]"></v-textarea>

                            <v-card-actions class="justify-center mb-3">
                                <v-btn v-on:click.prevent="submit()">Submit</v-btn>
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
import 'firebase/firestore'

const db = firebase.firestore()
export default {
    data() {
        return {
            name: undefined,
            email: undefined,
            phone: undefined,
            message: undefined,
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
        submit(){
            this.error = ""
            this.success = ""
            if(this.name === undefined){
                this.error = "Please add your name"
            } else if (this.email === undefined){
                this.error = "Please add your email"
            } else if (this.phone === undefined){
                this.error = "Please add your phone number"
            } else if (this.message === undefined){
                this.error = "Please add your message"
            } else {
                db.collection("contact").add({
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    message: this.message
                })
                .then((docRef) => {
                    this.success = "Successfully sent your message"
                })
                .catch((error) => {
                    this.error = error.message
                })
            }
        }  
    },
}
</script>