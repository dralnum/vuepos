<template>
 
  <v-layout>
    <v-flex xs12 sm12>
      <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
     
     <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          {{beer.name}}
        </v-card-title>

        <v-card-text>
           <v-layout row wrap>
          <v-flex xs6 sm6>
            <strong> Tagline: </strong> {{beer.tagline}}
          </v-flex>
          <v-flex xs6 sm6 mb-3>
             <strong> Fermentada em: </strong> {{beer.first_brewed}}
          </v-flex>
           <v-flex xs12 sm12>
             <strong> Descrição: </strong> {{beer.description}}
          </v-flex>
           </v-layout>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" flat color="blue" v-on:click="addToCart(beer)">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
      <v-card v-if="filter">
        <v-img
          :src="beer.image_url"
          aspect-ratio="1"
          height="200px"
          contain
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline">{{ beer.name }}</h3>
            <div>{{ beer.tagline }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="blue" v-on:click="addToCart(beer)">Adicionar</v-btn>
      <v-btn @click="dialog = true" flat color="orange">Detalhes</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import store from "@/store/cart.js";

export default {
  props: ["beer"],
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    filter() {
      if(store.state.filter == 1){
        return true;
      }
      
    }
  },  
  methods: {
    addToCart(beer) {
      store.commit("addToCart", beer);
    }
  }
};
</script>