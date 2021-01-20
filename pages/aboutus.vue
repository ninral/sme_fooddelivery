<template>
<div>
    <v-container>
      <!--about-->
     <v-row class="justify-center">
      <v-col
        cols="8"
      >
        <v-card class="red pa-6 mb-4">
          <v-card-title class="justify-center white--text mb-3"><h1>About us</h1></v-card-title>
          <p class="white--text mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi maxime, veritatis laborum nihil voluptatibus itaque officiis est a tenetur aliquid soluta facilis mollitia quasi vel explicabo eius provident magnam aliquam magni consectetur quibusdam delectus odit? Voluptatem ullam exercitationem rem reprehenderit minima eligendi autem quos dolores! Provident eaque tempora esse ratione assumenda! Accusamus maiores dignissimos, nihil eos deleniti odit sint? Ea assumenda voluptas eveniet voluptatum voluptatibus placeat hic dicta amet possimus natus reprehenderit inventore libero, unde repellendus eligendi! Repellat dolor dignissimos, tempore, ut fugit eveniet laboriosam cum laudantium alias debitis quibusdam distinctio tenetur magni quo id hic. Ducimus, veritatis mollitia.</p>
        </v-card>
      </v-col>
    </v-row>
    <!--end of about-->


 <!--What makes us different-->
      <v-row class="justify-center">
      <v-col
        cols="8"
      >
        <v-card class="red pa-6 mb-4">
          <v-card-title class="justify-center white--text mb-3"><h1>What makes us different</h1></v-card-title>
    <v-row>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="6"
        lg="4"
      >
      <div ></div>
  <v-card id="card"
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="300px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        View Details
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
      </v-col>
    </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!--end of wat makes us different-->
    <!--coverage area-->
          <v-row class="justify-center">
      <v-col
        cols="8"
      >
        <v-card class="red pa-6 mb-4">
          <v-card-title class="justify-center white--text mb-3"><h1>Our converage area</h1></v-card-title>
    <v-row>
      <v-col
        v-for="n in 2"
        :key="n"
        cols="12"
        sm="6"
        
      >
      <div ></div>
  <v-card id="card"
    class="mx-auto"
   
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="300px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        View Details
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
      </v-col>
    </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!--end of coverage area-->
        <!--contact information-->
    <v-row class="justify-center">
      <v-col
        cols="8"
      >
        <v-card class="red pa-6 mb-4">
          <v-card-title class="justify-center white--text mb-3"><h1>Contact Information</h1></v-card-title>
              <v-row>
      <v-col 
        cols="12"
        sm="4"
      >
      <div ></div>
      <p class="white--text mb-3"><span class="font-weight-bold">Address</span> No 39, Jalan AU2A /2 Taman Sri Keramat Kuala Lumpur, 54200 Wilayah Persekutuan, Wilayah Persekutuan Kuala Lumpur, Malaysia</p>
      </v-col>
      <v-col 
        cols="12"
        sm="4"
      >
      <div ></div>
      <p class="white--text mb-3"><span class="font-weight-bold">Phone number</span> 01113221111</p>
      </v-col>
       <v-col 
        cols="12"
        sm="4"
      >
      <div ></div>
      <p class="white--text mb-3"><span class="font-weight-bold">Email:</span> foodie@gmail.com</p>
      </v-col>
    </v-row>
        </v-card>
      </v-col>
    </v-row>
    
    <!--end of contact-->

    <!--location-->
    <v-row class="justify-center">
      <v-col
        cols="8"
      >
        <v-card class="red pa-6 mb-4">
          <v-card-title class="justify-center white--text mb-3"><h1>Our location</h1></v-card-title>
                      <div class="mapouter"><div class="gmap_canvas"><iframe width="800" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=No%2039,%20Jalan%20AU2A%20/2%20Taman%20Sri%20Keramat%20Kuala%20Lumpur,%2054200%20Wilayah%20Persekutuan,%20Wilayah%20Persekutuan%20Kuala%20Lumpur,%20Malaysia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://embedgooglemap.net/maps/49"></a><br><style>.mapouter{position:relative;text-align:center;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1100px;}</style></div></div>

        </v-card>
      </v-col>
    </v-row>
    <!--end of location-->
        
    </v-container>

   
</div>  
</template>


<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()
export default {
  data(){
    return {
      
      faqs: []

    }

  },
  
  mounted() {
    let faqs = []
    db.collection('faq').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let docWithId = doc.data()
                    docWithId.id = doc.id
                    faqs.push(docWithId)
                })
                this.faqs = faqs
            })
  },

}
</script>

<style>

</style>