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
            <v-row class="justify-center">
                <v-col cols="6">
                    <v-text-field placeholder="Filter Area Here..." v-model="areaFilter"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4" v-for="(restaurant, index) in getFilteredArea()" :key="index">
                    <v-card>
                        <v-img :src="restaurant.image_url" height="200px"></v-img>
                        <v-card-title>{{ restaurant.name }}</v-card-title>
                        <v-card-subtitle>{{ restaurant.location }}</v-card-subtitle>
                        <v-card-actions class="justify-center">
                            <v-btn color="red white--text" :to="'/restaurants/' + index">Check Restaurant</v-btn>
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
            areaFilter: ""
        }
    },
    beforeMount() {
        db.ref('/restaurants').once('value').then((querySnapshot) => {
            this.restaurants = querySnapshot.val()
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
        }
    },
}
</script>