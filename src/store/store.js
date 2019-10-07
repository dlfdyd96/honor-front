import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        greeting:'',//인증 ( Session 인증 )
        productMenu: 'A',
        isPanelOpen : false,
        selectedItem : 0,
        selectedBoard: {},
        contributors : [
            {season:'2019 Fall 기부자', peoples: []},
            {season:'2019 Spring 기부자', peoples: []},
            {season:'2018 Fall 기부자', peoples: []},
        ],
        members: [
            {
                Season:"2019 Fall 멤버",
                Peoples: {}
            },
            {
                Season:"2019 Spring 멤버",
                Peoples: {}
            },
            {
                Season:"2018 Fall 멤버",
                Peoples: {}
            },
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


        loginStatus : null,
        userId : "",
        joinStatus : null,
        myItemList : [],
        myCartList : [],
        myLikeList : [],
        titlemyitem: "",
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
        getSelectedItem(state){
            return state.selectedItem;
        },
        getSelectedBoard(state){
            return state.selectedBoard;
        },
        getUserId(state){
            return state.userId;
        },
        // getMyCartList(state){
        //     return state.myItemList;
        // },
        // getMyLikeList(state){
        //     return state.myItemList;
        // },
        getMyItemList(state){
            return state.myItemList;
        },
        getTitleMyitem(state){
            return state.titlemyitem;
        }
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
                if(data[i].Specification == "0"){//나중에 거를거 다 거르셈
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
            console.log('setQna: success data set');
        },
        setArticles(state, data){
            state.articles = [];

            for(let i = 0 ; i < data.length; i++){
                state.articles.push(data[i]);
            }
            console.log('setArticles: success data set');
        }, 
        setProducts(state, data){   //초기에는 proudcts 다 넣어주고
            state.products = [];
            state.productsTypes = [];

            for(let i = 0 ; i < data.length; i++){
                state.products.push(data[i]);
                if(state.productMenu == "A"){   //전체면 다 넣어주기
                    //console.log("pushing");
                    state.productsTypes.push(state.products[i]);
                } else if(state.productMenu == state.products[i].Specification){ //아니면 메뉴에 해당하는 종류들 넣어주기
                    //console.log("pushing kinds of");
                    state.productsTypes.push(state.products[i]);
                } 
            }
            console.log('setProducts: success data set');
        }, 
        changeProductMenu(state, payload){  //상의 하의 같이 세부 정보는 또 따로 해서 반환
            state.productMenu = payload.keyValue; //현재 state 변경
            console.log(state.productMenu);
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
        setSelectedItem(state, payload){
            state.selectedItem = payload;
            console.log(state.selectedItem);
        },
        setSelectedBoard(state, payload){
            state.selectedBoard = payload.give;
            console.log("gg "+state.selectedBoard.Title);
        },
        getPurchaseList(state){
            state.titlemyitem = "주문 상품 내역"
            state.myItemList = [];
        },



        /* 로그인 */
        setLoginStatus(state, payload){
            if(payload.loginStatus == "YES"){
                state.loginStatus = payload.loginStatus
                state.userId = payload.email
            }
        },
        setLogoutStatus(state){
            state.loginStatus = null
            state.userId = ""
        },
        setJoinStatus(state, payload){
            state.joinStatus = payload.joinStatus;
            console.log("gg "+state.joinStatus);
        },

        setMyCartList(state, payload){
            state.titlemyitem = "장바구니 내역";
            state.myItemList = [];
            
            for(let i = 0 ; i < payload.length ; i++){
                state.myItemList.push(payload[i]);
            }
        },
        setMyLikeList(state, payload){
            state.titlemyitem = "찜한 상품 내역"
            state.myItemList = [];
            
            for(let i = 0 ; i < payload.length ; i++){
                state.myItemList.push(payload[i]);
            }
        },
        setMembers(state, payload){
            state.members = [
                {
                    Season:"2019 Fall 멤버",
                    Peoples: []
                },
                {
                    Season:"2019 Spring 멤버",
                    Peoples: []
                },
                {
                    Season:"2018 Fall 멤버",
                    Peoples: []
                },
            ];
            for(let i = 0 ; i < payload.length ; i++){
                if(payload[i].Season == "18-3"){
                    state.members[2].Peoples.push(payload[i]);
                } else if(payload[i].Season == "19-1"){
                    state.members[1].Peoples.push(payload[i]);
                } else if(payload[i].Season == "19-3"){
                    state.members[0].Peoples.push(payload[i]);
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
        getCartServer(context, {userId}){
            console.log('request success ');
            axios.get('http://202.31.202.253:5000/customer/'+userId+'/cart')    //userId 를 id가 아닌 숫자로 알아야함.
            .then((response) => {
                this.commit('setMyCartList', response.data); //작성
                console.log('getCartServer request success ' + response.data);
              })
            .catch(response => {
                console.log('getCartServer Request Fail');
                console.log(response)
            });
        },
        getLikeServer(context, {userId}){
            console.log('request success ');
            axios.get('http://202.31.202.253:5000/customer/'+userId+'/like')    //userId 를 id가 아닌 숫자로 알아야함.
            .then((response) => {
                this.commit('setMyLikeList', response.data); //작성
                console.log('getLikeServer request success ' + response.data);
              })
            .catch(response => {
                console.log('getLikeServer Request Fail');
                console.log(response)
            });
        }, 
        getMemberServer(context){
            console.log('request success ');
            axios.get('http://202.31.202.253:5000/member')
            .then((response) => {
                this.commit('setMembers', response.data);
                console.log('Members request success ' + response);
              })
            .catch(response => {
                console.log('Members Request Fail');
                console.log(response)
            });
        },









        
        signUp(context, {E_mail, Name, Password}){
            //console.log("test: " + E_mail + Name + Password) 
            return axios.post('http://202.31.202.253:5000/auth/join', {E_mail, Name, Password})
            .then((response) =>{    //아이디 생성 성공
                //console.log("success" + E_mail + Name + Password) 
                console.log("success : " + response.data.joinStatus) 
                context.commit('setJoinStatus', response.data);
            })
            .catch((response) =>{   // 생성 실패
                console.log("reponse error : " + response.data.joinStatus) 
            })
        },
        login(context, {email, password}){
            //console.log("test: " + email + password) 
            return axios.post('http://202.31.202.253:5000/auth/login', {email, password})
            .then((response) =>{
                console.log("success : " + response.data.loginStatus)
                context.commit('setLoginStatus',{loginStatus : response.data.loginStatus, email})
            })
        },
        // logout(context, {id}){
        //     //console.log("test: " + email + password) 
        //     axios.post('http://202.31.202.253:5000/auth/logout', {id})
        //     .then((response) => {
        //         console.log("success : " + response.data)
        //         context.commit('setLogoutStatus')
        //     })
        //     .catch((response) =>{   // 생성 실패
        //         console.log("reponse error : " + response.data) 
        //     })
        // },

        kakaologin(context){
            //console.log("test: " + email + password) 
            return axios.post('http://202.31.202.253:5000/auth/kakao')//
            .then((response) =>{
                console.log("success : " + response.data.loginStatus)
                context.commit('setLoginStatus',{loginStatus : response.data.loginStatus, email})
            })
        },
        // setLikeListServer(context, {itemid}){
        //     //console.log('request success ');
        //     return axios.post('http://202.31.202.253:5000/post/'+itemid+'/like')
        //     .then((response) => {
        //         this.commit('setMyItemList', response.data);
        //         console.log('request success ' + response);
        //     })
        //     .catch(response => {
        //         console.log('Products Request Fail');
        //         console.log(response)
        //     });
        // },
        setPurchaseServer(context, {userId, Itemid}){
            console.log(userId + Itemid);
            return axios.patch('http://202.31.202.253:5000/product/purchase/'+Itemid+'/', {customerName : userId})
            .then((response) => {
                //this.commit('setCartList', response.data); 갱신해줄 필요 없음. 없나?
                console.log('set Purchase Request success : ' + response.data);
                //this.dispatch('getProductServer');// 상품리스트 상품 받아옴
            })
            .catch(response => {
                console.log('Set Purchase Request Fail');
                console.log(response)
            });
        },
        setCartListServer(context, {userId, Itemid}){
            console.log(userId + Itemid);
            return axios.post('http://202.31.202.253:5000/customer/'+ userId  +'/cart/', {Itemid})
            .then((response) => {
                //this.commit('setCartList', response.data); 갱신해줄 필요 없음. 없나?
                //this.dispatch('getCartServer', {userId});// 장바구니 상품 받아옴
                console.log('set cart list Request success : ' + response.data);
            })
            .catch(response => {
                console.log('Set Cart List Request Fail');
                console.log(response)
            });
        },
        setLikeListServer(context, {userId, Itemid}){
            console.log(userId + Itemid);
            return axios.post('http://202.31.202.253:5000/customer/'+ userId  +'/like/', {Itemid})
            .then((response) => {
                //this.commit('setCartList', response.data); 갱신해줄 필요 없음. 없나?
                //this.dispatch('getCartServer', {userId});// 장바구니 상품 받아옴
                console.log('set like list Request success : ' + response.data);
            })
            .catch(response => {
                console.log('Set like List Request Fail');
                console.log(response)
            });
        },
    }
});