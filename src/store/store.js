import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        productMenu: 'A',
        isPanelOpen : false,
        isClickItem : false,
        contributors : [
            {season:'2019 Fall 기부자', peoples: []},
            {season:'2019 Spring 기부자', peoples: []},
            {season:'2018 Fall 기부자', peoples: []},
        ],
        members: [
            { season: '2019 Fall 멤버들', peoples: [{Name:"김태성", StudentNumber:"20150364", Pictures:"path"}] },
            { season: '2019 Spring 멤버들', peoples: [{ Name: "김태성", StudentNumber: "20150364", Pictures: "path" }] },
            { season: '2018 Fall 멤버들', peoples: [{ Name: "김태성", StudentNumber: "20150364", Pictures: "path" }] },
        ],
        notice: [
            {N: 0, title:"명예옷장 off-line 날짜", date:'2019-10-11', writer:'강민정', view:'3'},
            {N: 1, title:"명예옷장 on-line 날짜", date:'2019-10-01', writer:'강민정', view: '9'}
        ],
        qna: [
            {N: 0, title:"명예옷장 off-line 날짜", date:'2019-10-11', writer:'강민정', view:'3'},
            {N: 1, title:"명예옷장 on-line 날짜", date:'2019-10-01', writer:'강민정', view: '9'}
        ],
        temp: ['abcd'],
        main_background : 'http://202.31.202.253:5000/assets/image/2019_fall_mainpage1.jpg',
        articles : [],
        products : [],
        productsTypes: [],
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
        },
        getMembers(state) {
            return state.members;
        },
        getNotice(state){
            return state.notice;
        },
        getQna(state){
            return state.qna;
        },
        getArticles(state){
            return state.articles;
        },
        getRandomBackground(state){
            //console.log(state.main_background);
            return state.main_background;
        },
        getProducts(state){ //매개변수로 Specification 으로 구별 하여 다 뽑아줄것.
            return state.products;
        },
        getKindsOfProducts(state){
            return state.productsTypes;
        },
    },
    mutations: {
        togglePanel(state) {
            state.isPanelOpen = !state.isPanelOpen;
        },
        setBackground(state){
            //console.log(state.main_background);
            state.main_background = 'http://202.31.202.253:5000/assets/image/2019_fall_mainpage' + (Math.floor(Math.random() * (5 - 1)) + 1) + '.jpg';
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
        },
        setNotice(state, data){
            state.notice = [];

            for(let i = 0 ; i < data.length; i++){
                if(data[i].isNotice == "1"){//나중에 거를거 다 거르셈
                    state.notice.push(data[i]);
                } 
            }
            console.log('setNotice: success data set');
        },
        setQna(state, data){
            state.qna = [];

            for(let i = 0 ; i < data.length; i++){
                if(data[i].Specification == "1"){//나중에 거를거 다 거르셈
                    state.qna.push(data[i]);
                } 
            }
            console.log('setNotice: success data set');
        },
        setArticles(state, data){
            state.articles = [];

            for(let i = 0 ; i < data.length; i++){
                state.articles.push(data[i]);
            }
            console.log('setNotice: success data set');
        }, 
        setProducts(state, data){   //초기에는 proudcts 다 넣어주고
            state.products = [];
            state.productsTypes = [];

            for(let i = 0 ; i < data.length; i++){
                state.products.push(data[i]);
                state.productsTypes.push(data[i]);
            }
            console.log('setNotice: success data set');
        }, 
        changeProductMenu(state, payload){  //상의 하의 같이 세부 정보는 또 따로 해서 반환
            state.productMenu = payload.keyValue; //현재 state 변경
            //console.log(state.productMenu);
            state.productsTypes = [];
            for(let i = 0 ; i < state.products.length ; i++){ 
                if(state.productMenu == "A"){   //전체면 다 넣어주기
                    //console.log("pushing");
                    state.productsTypes.push(state.products[i]);
                } else if(state.productMenu == state.products[i].Specification){ //아니면 메뉴에 해당하는 종류들 넣어주기
                    //console.log("pushing kinds of");
                    state.productsTypes.push(state.products[i]);
                } 
            }
        },
    },
    actions : {
        getContributorsServer(context){
            axios.get('http://202.31.202.253:5000/donator')
            .then((response) => {
                this.commit('setContributors',response.data);
                console.log('request success '+response);
              })
            .catch(response => {
                console.log('Contributors Request Fail');
                console.log(response)
            });
        }, 
        getNoticeServer(context){
            console.log('request success :  ');
            axios.get('http://202.31.202.253:5000/board')
            .then((response) => {
                this.commit('setNotice',response.data);
                console.log('request success '+response);
              })
            .catch(response => {
                console.log('Ntoice request fail');
                console.log(response)
            });
        }, 
        getQnaServer(context){
            console.log('request success ');
            axios.get('http://202.31.202.253:5000/board')
            .then((response) => {
                this.commit('setQna',response.data);
                console.log('request success '+response);
              })
            .catch(response => {
                console.log('Qna request fail');
                console.log(response)
            });
        }, 
        getArticleServer(context){
            console.log('request success ');
            axios.get('http://202.31.202.253:5000/article')
            .then((response) => {
                this.commit('setArticles',response.data);
                console.log('request success '+response);
              })
            .catch(response => {
                console.log('Article Request Fail');
                console.log(response)
            });
        }, 
        getProductServer(context){
            console.log('request success ');
            axios.get('http://202.31.202.253:5000/product')
            .then((response) => {
                this.commit('setProducts', response.data);
                console.log('request success ' + response);
              })
            .catch(response => {
                console.log('Products Request Fail');
                console.log(response)
            });
        }, 
    }
});