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
            <v-row>
                <v-col cols="4">
                    <v-card v-for="(item, index) in restaurant.menu" :key="index">
                        <v-card-title>{{ item.name }}</v-card-title>
                        <v-card-subtitle>{{ item.details }}</v-card-subtitle>
                        <v-card-subtitle>Price: {{ item.price }} RM</v-card-subtitle>
                        <v-card-actions class="justify-center">
                            <v-btn color="red white--text">Add to cart</v-btn>
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
            restaurant: {}
        }
    },
    beforeMount() {
        if(!this.$route.params.id){
            this.$router.push("/restaurants")
        }
        console.log(`/restaurants/${this.$route.params.id}`)
        db.ref(`/restaurants/${this.$route.params.id}`).once('value').then((querySnapshot) => {
            this.restaurant = querySnapshot.val()
        })
    },
}
</script>