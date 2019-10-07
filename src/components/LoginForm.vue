<template>
    <div class='main'>
        <section id="form">
            <p id="title"><strong>LOGIN</strong></p>
            <div id="login_box">
                <ul id="input_button">
                    <li id="id_pass">
                        <ul>
                            <li id="login_id"><input type="text" placeholder="  id" class="textbox" v-model="userInfo.email"></li>
                            <li id="login_pwd"><input type="password" placeholder="  pwd" class="textbox" v-model="userInfo.password"></li>
                        </ul>
                    </li>
                    <li id="login_btn"><button @click="onLogin">로그인</button></li>
                    
                    <modal v-if="showModal" @close="showModal = false"><!--
                        you can use custom content here to overwrite
                        default content
                        -->
                        <h3 slot="header">로그인
                            <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
                        </h3>
                        <div slot="body">
                            아이디와 비밀번호를 확인 해주세요
                        </div>
                        <div slot="footer"></div>
                    </modal>
                </ul>
                
                
                
                <ul id="btns">
                    <button id="kakaoBox">카카오계정으로 시작하기</button>
                    <li>
                    <router-link tag="button" id="id_search" to="/findinfo">아이디/비밀번호 찾기 ></router-link>
                    <router-link id="join_btn" tag="button" to="/join">회원가입 ></router-link>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import Modal from './commons/Modal'

export default {
    data() {
        return {
            userInfo : {
                email : "",
                password : "",
            }, 
            showModal: false,
        }
    },
    components : {
        Modal,
    },
    methods : {
        ...mapActions(['login']),
        onLogin(){
            this.$store.dispatch('login', this.userInfo)
            .then(()=>{
                if(this.$store.state.loginStatus=="YES")
                    this.$router.push('/')
                else{
                    this.showModal = true;
                    console.log("login fail retry");
                    //modal 표시
                }
            })
            .catch((response) => {
                
                this.showModal = true;
                console.log('request fail')
            })
        }
    },
}
</script>

<style scoped>
    .main{
        min-height: 100vh;
        height: calc(100vh-89px);
		background-color: rgb(233, 236, 241);
    }
    #form{
        position: relative;
        text-align: center;
        top: 27.4vh;
    }
    #title{
        font-size: 3.52vw;
        color: black;
    }
    li{
        list-style: none;
    }

    .textbox{
        background-color: rgb(233, 236, 241);
        border-color: black;
        border: 1px solid;
        width: 16.1vw;
        height: 4.7vh;
        text-align: center;
        font-size: 100%;
    }

    #login_box{
        position: relative;
        top:13.5vh;
    }

    #input_button{
        display: table;
        margin:auto;
        
    }
    #login_pwd{
        margin-top: 1.8vh;
    }

    li[id="id_pass"],[id="login_btn"]{
        display: inline-block;
        vertical-align: middle;
        margin-left: 1.8vw;
    }

    #login_btn button {
        width: 8.78vw;
        height: 11.3vh;
        font-size: 1.45vw;
        background-color: rgb(118,112,112);
        color: white;
        cursor: pointer;
    }

    #btns {
        text-align: center;
        padding-top: 4.7vh;
    }

    #id_search{
        width: 13vw;
        height: 3.6vh;
        margin-left:1.8vw;
        font-size: 0.87vw;
        background-color: rgb(118,112,112);
        color: white;
        cursor: pointer;
    }

    #join_btn{
        width: 8.8vw;
        height: 3.6vh;
        margin-left:1.8vw;
        font-size: 0.87vw;
        background-color: rgb(118,112,112);
        color: white;
        cursor: pointer;
    }

    #kakaoBox{
        margin-left: 1.8vw;
        width: 23.5vw;
        height: 3.6vh;
        font-size: 0.87vw;
        margin-bottom: 3.2vh;
        background-color: rgb(250,255,0);
        color: rgb(60, 30, 30);
        border: none;
        cursor: pointer;
    }
    
    .closeModalBtn{
        float: right;
        color: #42b983;
    }
</style>