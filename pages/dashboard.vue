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
                            <v-btn color="red white--text" outlined @click="emptyCart()">Empty Cart</v-btn>
                            <v-btn color="red white--text" @click="checkout()">Checkout</v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-card v-else>
                        <v-card-title class="justify-center">Your Cart</v-card-title>

                        <v-card-subtitle class="text-center py-6">You have no items in your cart</v-card-subtitle>

                        <v-card-actions class="justify-center">
                            <v-btn to="/restaurants" color="red white--text">Checkout Restaurants</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <!-- <v-card v-if="orders">
                        <v-card-title class="justify-center">Your Orders</v-card-title>
                        <v-list>
                            <v-list-group v-for="(order, index) in orders" :key="index">
                                <template v-slot:activator>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ getRestaurantNameMethod(order.restaurant) }} - Order Date: {{ order.order_date }}</v-list-item-title>
                                    </v-list-item-content>
                                </template>

                                <v-list-item v-for="(item, index) in order.items" :key="index">
                                    {{ getRestaurantMenuItem(order.restaurant, index).name }} - Quantity: {{ item.quantity }}
                                </v-list-item>
                            </v-list-group>
                        </v-list>
                    </v-card>
                    <v-card v-else>
                        <v-card-title class="justify-center">Your Orders</v-card-title>

                        <v-card-subtitle class="text-center py-6">You have no previous orders</v-card-subtitle>
                    </v-card> -->
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
            restaurant: {},
            orders: [],
            restaurants: []
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
        db.ref('/orders/' + this.user.id).once('value').then((querySnapshot) => {
            this.orders = querySnapshot.val()
        })
        db.ref('/restaurants').once('value').then((querySnapshot) => {
            this.restaurants = querySnapshot.val()
        })
    },
    methods: {
        getMenuItemName(index){
            if(this.restaurant.hasOwnProperty("menu")){
                return this.restaurant.menu[index.charAt(index.length-1)].name
            }
            return ""
        },
        emptyCart(){
            db.ref('/cart/' + this.user.id).remove((error) => {
                if(error){
                    console.log(error)
                } else {
                    db.ref('/cart/' + this.user.id).once('value').then((querySnapshot) => {
                        this.cart = querySnapshot.val()
                    })
                }
            })
        },
        checkout(){
            let order = {}
            if(this.orders){
                order = {
                    [this.orders.length]: this.cart,
                    order_time: new Date(),
                    isDelivered: false,
                }
            } else {
                order = {
                    0: this.cart,
                    
                }
            }
            db.ref('/orders/' + this.user.id).set(order, (error) => {
                if(error){
                    console.log(error)
                } else {
                    db.ref('/cart/' + this.user.id).remove((error) => {
                        if(error){
                            console.log(error)
                        } else {
                            db.ref('/cart/' + this.user.id).once('value').then((querySnapshot) => {
                                this.cart = querySnapshot.val()
                            })
                            db.ref('/orders/' + this.user.id).once('value').then((querySnapshot) => {
                                this.orders = querySnapshot.val()
                            })
                        }
                    })
                }
            })
        },
        getRestaurantNameMethod(index){
            return this.restaurants.filter((r, i) => i == index).name
        },
        getRestaurantMenuItem(restaurant, item_index){
            let rest = this.restaurants.filter((r, i) => i == restaurant)
            if(rest.hasOwnProperty("menu")){
                return rest.menu.filter((item, index) => index == item_index.charAt(item_index.length-1))
            }
            let menu = {
                name: ""
            }
            return menu
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

