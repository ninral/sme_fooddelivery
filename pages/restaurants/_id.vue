<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <v-card>
                        <v-img :src="restaurant.image_url" height="200px"></v-img>
                        <v-card-title>{{ restaurant.name }}</v-card-title>
                        <v-card-subtitle>{{ restaurant.location }}</v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="justify-center">
                <v-col cols="6">
                    <v-select v-model="caloriesFilter" :items="caloriesList" item-text="title" item-value="value" label="Filter by calories..."></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4" v-for="item in getFilteredCalories()" :key="item.id">
                    <v-card>
                        <v-card-title>{{ item.name }}</v-card-title>
                        <v-card-subtitle>Calories: {{ item.calories }}</v-card-subtitle>
                        <v-card-subtitle>Price: {{ item.price }} RM</v-card-subtitle>
                        <v-card-actions class="justify-center" v-if="user.hasOwnProperty('id') && cartHasMenuItem(item.id)">
                            <v-card-subtitle>Quantity: {{ cart.items['item' + item.id].quantity }}</v-card-subtitle>
                        </v-card-actions>
                        <v-card-actions class="justify-center">
                            <v-btn color="red white--text" @click="addToCart(item.id)" v-if="user && user.hasOwnProperty('id')">Add to cart</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'

const db = firebase.database()
export default {
    data() {
        return {
            restaurant: {},
            user: {},
            cart: {},
            caloriesFilter: "All",
            caloriesList: [
                "All",
                "0-300",
                "301-600",
                "601-900",
                "901-1200",
            ]
        }
    },
    beforeMount() {
        if(this.$store.state.user.user.loggedIn){
            this.user = this.$store.state.user.user.data
        }

        if(!this.$route.params.id){
            this.$router.push("/restaurants")
        }
        db.ref(`/restaurants/${this.$route.params.id}`).once('value').then((querySnapshot) => {
            this.restaurant = querySnapshot.val()
            this.restaurant.menu.forEach((item, index) =>{
                item.id = index
            })
        })

        if(this.user && this.user.hasOwnProperty("id")){
            db.ref('/cart/' + this.user.id).once('value').then((querySnapshot) => {
                this.cart = querySnapshot.val()
            })
        }
    },
    methods: {
        getMenuItemName(index){
            if(this.restaurant.hasOwnProperty("menu")){
                return this.restaurant.menu.find(item => item.id == index).name
            }
            return undefined
        },
        cartHasMenuItem(index){
            if(this.cart && this.cart.restaurant == this.$route.params.id){
                if(this.cart.items['item' + index]){
                    return true
                }
            }
            return false
        },
        addToCart(index){
            let url = '/cart/' + this.user.id
            let cart = {}
            if(this.cart && this.cart.restaurant == this.$route.params.id){
                if(this.cart.items.hasOwnProperty('item' + index)){
                    url = '/cart/' + this.user.id + '/items/' + 'item' + index + '/quantity'  
                    cart = this.cart.items['item' + index].quantity+1
                } else {
                    url = '/cart/' + this.user.id + '/items/' + 'item' + index + '/quantity'  
                    cart = 1
                }
            } else {
                cart = {
                    restaurant: this.$route.params.id,
                    items: {
                        ['item' + index]: {
                            quantity: 1
                        }
                    }
                }
            }
            db.ref(url).set(cart, (error) => {
                if(error){
                    console.log(error)
                } else {
                    db.ref('/cart/' + this.user.id).once('value').then((querySnapshot) => {
                        this.cart = querySnapshot.val()
                    })
                }
            })
        },
        getFilteredCalories(){
            if(this.restaurant){
                switch(this.caloriesFilter){
                    case "0-300":
                        return this.restaurant.menu.filter((item) => {
                            return (item.calories <= 300) && (item.calories >= 0) 
                        })
                        break
                    case "301-600":
                        return this.restaurant.menu.filter((item) => {
                            return (item.calories <= 600) && (item.calories >= 301) 
                        })
                        break
                    case "601-900":
                        return this.restaurant.menu.filter((item) => {
                            return (item.calories <= 900) && (item.calories >= 601) 
                        })
                        break
                    case "901-1200":
                        return this.restaurant.menu.filter((item) => {
                            return (item.calories <= 1200) && (item.calories >= 901) 
                        })
                        break
                    default:
                        this.restaurant.menu

                }
            }
            return this.restaurant.menu
        }
    },
    computed: {
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