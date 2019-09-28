import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);



export const store = new Vuex.Store({
    state: {
        MenuMode: 'all',
        isPanelOpen : false,
        contributors : [
            {season:'2019 Fall 기부자', names: 'OOO OOO'},
            {season:'2019 Spring 기부자', names:'신호균, 이용환, 김진한, 김귀곤, 구정호, 김선아, 이희란, 김상민, 김은희, 김문정, 정현욱, 김동혁, 조유근, 이승현, 오현숙, 김지희, 최혜정, 김효진'},
            {season:'2018 Fall 기부자', names:'조진형, 이지수, 김경모, 차우창, 이종환, 김선아, 구정호, 조성주, 권기연, 김혜경'},
        ],
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
    }
});