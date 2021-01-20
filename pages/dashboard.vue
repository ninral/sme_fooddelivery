<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-title class="justify-center" color="red white--text">Welcome, {{ getUserName }}</v-card-title>
                        <v-card-subtitle>Here you can view your cart, your current order, and any previous order</v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card v-if="cart">
                        <v-card-title class="justify-center">Your Cart</v-card-title>

                        <v-card-title class="text-h5 ma-0 py-2">{{ getRestaurantName }}</v-card-title>
                        <v-card-title class="text-h5 ma-0 py-2">Your Items:</v-card-title>
                        <v-list>
                            <v-list-item v-for="(item, index) in getCart.items" :key="index">
                                <v-list-item-title>{{ getMenuItemName(index) }} - Quantity: {{ item.quantity }}</v-list-item-title>
                            </v-list-item>
                        </v-list>

                        <v-card-actions>
                            <v-btn color="red white--text">Checkout</v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-card v-else>
                        <v-card-subtitle>You have no items in your cart</v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'
import { mapGetters } from 'vuex'

const db = firebase.database()

export default {
    data() {
        return {
            user: {},
            cart: {},
            restaurant: {}
        }
    },
    beforeMount() {
        if(!this.$store.state.user.user.loggedIn){
            this.$router.push("/")
        }  
        this.user = this.$store.state.user.user.data
        db.ref('/cart/' + this.user.id).once('value').then((querySnapshot) => {
            this.cart = querySnapshot.val()
            if(this.cart){
                db.ref('/restaurants/' + this.cart.restaurant).once('value').then((querySnapshot) => {
                    this.restaurant = querySnapshot.val()
                })
            }
        })
    },
    methods: {
        getMenuItemName(index){
            if(this.restaurant.hasOwnProperty("menu")){
                return this.restaurant.menu[index].name
            }
            return ""
        }
    },
    computed: {
        getUserName(){
            if(this.user.hasOwnProperty("displayName")){
                return this.user.displayName
            }
            return ""
        },
        getCart(){
            if(this.cart){
                return this.cart
            }
            return {}
        },
        getRestaurantName(){
            if(this.restaurant.hasOwnProperty("name")){
                return this.restaurant.name
            }
            return ""
        }
    },
}
</script>

