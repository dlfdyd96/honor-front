import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        MenuMode: 'all',
        isPanelOpen : false,
        contributors : [
            {season:'2019 Fall 기부자', peoples: []},
            {season:'2019 Spring 기부자', peoples: []},
            {season:'2018 Fall 기부자', peoples: []},
        ],
        temp: ['abcd']
    },
    getters:{
        getPanelIs(state) {
            return state.isPanelOpen;
        },
        getMenuMode(state){
            return state.MenuMode;
        },
        getContributors(state){
            return state.contributors;
        }
    },
    mutations: {
        togglePanel(state) {
            state.isPanelOpen = !state.isPanelOpen;
        },
        setContributors(state, data){
            this.state.temp = data;
            this.state.contributors[0].peoples = [];
            this.state.contributors[1].peoples = [];
            this.state.contributors[2].peoples = [];
            console.log('set contributors success ' + data);
            for(let i = 0 ; i < data.length ; i++){
                console.log('data[' + i  + ']: ' + data[i].Season);
                switch(data[i].Season){
                    case "19-3":
                        state.contributors[0].peoples.push(data[i]);
                        break;
                    case "19-1":
                        state.contributors[1].peoples.push(data[i]);
                        break;
                    case "18-3":
                        state.contributors[2].peoples.push(data[i]);
                        break;
                    default:
                        break;
                }
            }
        }
    },
    actions : {
        getContributorsServer(context){
            axios.get('http://202.31.202.253:5000/donator')
            .then((response) => {
                this.commit('setContributors',response.data);
                console.log('request success '+response);
              })
            .catch(response => {
                console.log('tlqkftlqkf');
                console.log(response)
            });
        }
    }
});