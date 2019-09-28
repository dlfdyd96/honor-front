import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        MenuMode: 'all'
    },
    getters:{
        getMenuMode(state){
            return state.MenuMode;
        }
    }
});