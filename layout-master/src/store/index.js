import Vue from "vue";
import Vuex from "vuex";
import {v1} from "uuid";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
     list:[],
     nama:'sasjhasa'
  },

  getters:{},

  mutations: {
     list_account(state , data){
        state.list = data
     }
  
  },
  actions: {

       listAccount({ commit }) {
        axios.get('https://c2fc1e3ef947.ngrok.io/user?page=1&limit=100').then((response) => {
          commit('list_account',response.data.data)
      })
    }       
  },

   
  modules: {}
});
