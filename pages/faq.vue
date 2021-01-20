<template>
<div>
    <v-container>
        <v-row>
      <v-col
        cols="12"
      >
        <v-card>
          <v-card-title class="justify-center">Frequently Asked Questions</v-card-title>
          <v-list>
              <v-list-item v-for="faq in faqs" :key="faq.id">
                <v-list-item-content>
                  <v-list-item-title v-html="faq.question"></v-list-item-title>
                  <v-list-item-subtitle v-html="faq.answer"></v-list-item-subtitle>
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