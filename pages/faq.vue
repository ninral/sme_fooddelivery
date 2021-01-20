<template>
<div>
    <v-container>
         <subtitle :title="title"/>
        <v-row>
      <v-col
        cols="12"
      >
        <v-card>
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
export default {
  data(){
    return {
      
      faqs: []

    }

  },
  
  mounted() {
    this.$axios.get('/api/faq/get').then((res) => {
      if(!res.data.hasOwnProperty('error')){
        this.faqs = res.data.faqs;
      }
    })
  },

}
</script>

<style>

</style>