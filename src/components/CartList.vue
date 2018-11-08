<template>
  <v-list two-line subheader>
    <v-subheader inset>Shopping Cart</v-subheader>

    <v-list-tile
      v-for="beer in beers"
      :key="beer.id"
      avatar
      @click=""
    >
      <v-list-tile-avatar>
        <img :src="beer.image_url" @click="dialog = true">
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ beer.name }}</v-list-tile-title>
        <v-list-tile-sub-title>Quantidade: {{ beer.quantity }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-content>
      <v-btn icon ripple v-on:click="addQuantity(beer)">
      <v-icon color="grey lighten-1">add</v-icon>
    </v-btn>
    <v-btn icon ripple v-on:click="removeQuantity(beer)">
      <v-icon color="grey lighten-1">remove</v-icon>
    </v-btn>
      </v-list-tile-content>

      <v-list-tile-action>
        <v-btn icon ripple v-on:click="removeFromCart(beer)">
          <v-icon color="grey lighten-1">delete</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>

    <v-divider inset></v-divider>
    <div>
        <h3 class="headline mb-0"> Quantidade total: {{qty}}</h3>
        <h3 class="headline mb-0"> Valor total: R${{total}}</h3>        
    </div>


  </v-list>
</template>


<script>
import store from "@/store/cart.js";

export default {
  computed: {
    beers() {
      return store.state.beers;
    },
    qty() {
      return store.state.qty;
    },
    total() {
      var total = store.state.qty * 2.5;
      var desconto = total - (total * 0.1);
      
      if (store.state.qty >= 10) {
        return desconto.toFixed(2).replace(".", ",") + " (sem desconto: R$" + total.toFixed(2).replace(".", ",") + ")";
      } else {
        return total.toFixed(2).replace(".", ",");
      }
    }
  },
  methods: {
    removeFromCart(beer) {
      store.commit("removeFromCart", beer);
    },
    addQuantity(beer) {
      store.commit("addQuantity", beer);
    },
    removeQuantity(beer) {
      store.commit("removeQuantity", beer);
    }
  }
};
</script>
