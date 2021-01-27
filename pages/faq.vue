<template>
<div>
    <v-container>
        <v-row class="justify-center">
      <v-col
        cols="8"
      >
        <v-card class="red pa-6 mb-4">
          <v-card-title class="justify-center white--text mb-3"><h1>Frequently Asked Questions</h1></v-card-title>
          <v-list class="red">
              <v-list-item v-for="faq in faqs" :key="faq.id">
                <v-list-item-content>
                  <v-list-item-title class=" white--text mb-3 font-weight-bold text-wrap"><h2 v-html="faq.question"></h2></v-list-item-title>
                  <v-list-item-subtitle class="white--text mb-3 text-wrap">{{ faq.answer }}</v-list-item-subtitle>
                  <v-divider></v-divider>
                </v-list-item-content>
              </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
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