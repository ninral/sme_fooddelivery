<template>
    <div>
        <v-container>
            <v-row class="justify-center">
                <v-col>
                    <v-card>
                        <v-card-title class="justify-center pa-10 mb-4 red white--text">Restaurants Available</v-card-title>
                    </v-card>
                </v-col>
            </v-row>
            <v-dialog v-model="filterDialog" width="400">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-card>
                                <v-card-title>Extra Filters</v-card-title>

                                <v-row class="justify-center">
                                    <v-col cols="6">
                                        <v-select v-model="restaurantTypeFilter" :items="getRestaurantTypes()" item-text="title" item-value="value" label="Restaurant Type"></v-select>
                                    </v-col>
                                </v-row>
                                <v-row class="justify-center">
                                    <v-col cols="6">
                                        <v-select v-model="restaurantPriceRangeFilter" :items="restaurantPriceRange" item-text="title" item-value="value" label="Restaurant Price Range"></v-select>
                                    </v-col>
                                </v-row>

                                <v-card-actions>
                                    <v-btn color="red white--text" outlined @click="resetFilters()">Reset Filters</v-btn>
                                    <v-btn color="red white--text" @click="filterDialog = false">Close</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-dialog>
            <v-row class="justify-center">
                <v-col cols="5">
                    <v-text-field placeholder="Filter Area Here..." v-model="areaFilter"></v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-btn icon class="my-5" @click="filterDialog = true">
                        <v-icon>mdi-filter</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4" v-for="restaurant in getFilteredRestaurants()" :key="restaurant.id">
                    <v-card>
                        <v-img :src="restaurant.image_url" height="200px"></v-img>
                        <v-card-title>{{ restaurant.name }}</v-card-title>
                        <v-card-subtitle>{{ restaurant.location }}</v-card-subtitle>
                        <v-card-actions class="justify-center">
                            <v-btn color="red white--text" :to="'/restaurants/' + restaurant.id">Check Restaurant</v-btn>
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
            restaurants: [],
            areaFilter: "",
            filterDialog: false,
            restaurantTypeFilter: "All",
            restaurantTypes: [
                "All"
            ],
            restaurantPriceRangeFilter: "All",
            restaurantPriceRange: [
                "All", 
                "1-20",
                "21-40",
                "41-60",
                "61-80"
            ]
        }
    },
    beforeMount() {
        db.ref('/restaurants').once('value').then((querySnapshot) => {
            this.restaurants = querySnapshot.val()
            this.restaurants.forEach((restaurant, index) => {
                restaurant.id = index
            })
        })
    },
    methods: {
        getFilteredArea(){
            if(this.restaurants.length > 0){
                return this.restaurants.filter((restaurant) => {
                    return restaurant.location.toLowerCase().includes(this.areaFilter.toLowerCase())
                })
            }
            return this.restaurants
        },
        getRestaurantTypes(){
            if(this.restaurants.length > 0){
                this.restaurants.forEach((restaurant) => {
                    if(!this.restaurantTypes.includes(restaurant.type)){
                        this.restaurantTypes.push(restaurant.type)   
                    }
                })
            }
            return this.restaurantTypes
        },
        resetFilters(){
            this.filterDialog = false
            this.areaFilter = ""
            this.restaurantTypeFilter = "All"
        },
        getFilteredRestaurants(){
            let filtered = this.restaurants
            if(filtered){
                if(this.restaurantTypeFilter != "All"){
                    filtered = filtered.filter((restaurant) => {
                        return restaurant.type == this.restaurantTypeFilter
                    })
                }

                if(this.restaurantPriceRangeFilter != "All"){
                    filtered = filtered.filter((restaurant) => {
                        return restaurant.priceRange == this.restaurantPriceRangeFilter
                    })
                }

                if(this.areaFilter){
                    filtered = filtered.filter((restaurant) => {
                        return restaurant.location.toLowerCase().includes(this.areaFilter.toLowerCase())
                    })
                }

                return filtered
            }
            return this.restaurants
        }
    },
}
</script>