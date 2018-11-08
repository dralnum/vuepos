import Vue from 'vue'
import Vuex from 'vuex'

import {
  findIndex
} from 'lodash-es'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: [],
    qty: 0,
    filter: 0
  },
  mutations: {
    addToCart(state, beer) {

      let index = findIndex(state.beers, (o) => o.id == beer.id)

      if (index === -1) {
        state.beers.push({
          id: beer.id,
          name: beer.name,
          tagline: beer.tagline,
          first_brewed: beer.first_brewed,
          description: beer.description,
          price: 2.5,
          quantity: 1,
          image_url: beer.image_url
        }),
        state.qty++
      } else {
        state.beers[index].quantity++;
        state.qty++
      }

    },
    removeFromCart(state, beer) {

      let index = findIndex(state.beers, (o) => o.id == beer.id)
      state.qty = state.qty - beer.quantity;
      state.beers.splice(index, 1);

    },
    addQuantity(state, beer) {

      let index = findIndex(state.beers, (o) => o.id == beer.id)

      state.beers[index].quantity++;
      state.qty++

    },
    removeQuantity(state, beer) {

      let index = findIndex(state.beers, (o) => o.id == beer.id)
      if(state.beers[index].quantity > 0) {
        state.beers[index].quantity--;
        state.qty--
      }
      

    },
    filter(state, filter) {
      state.filter = filter;

    },
  },
  actions: {

  }
})
