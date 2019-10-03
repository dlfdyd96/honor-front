<template>
    <div id='main'>
        <section id="form">
            <p id="title"><strong>LOGIN</strong></p>
            <div id="login_box">
                <ul id="input_button">
                    <li id="id_pass">
                        <ul>
                            <li id="login_id"><input type="text" placeholder="  id" class="textbox"></li>
                            <li id="login_pwd"><input type="password" placeholder="  pwd" class="textbox"></li>
                        </ul>
                    </li>
                    <li id="login_btn"><button>로그인</button></li>
                </ul>
                <ul id="btns">
                    <button id="id_search">아이디/비밀번호 찾기 ></button>
                    <router-link id="join_btn" tag="button" to="/join">회원가입 ></router-link>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #main{
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
    }

    #btns {
        text-align: center;
        padding-top: 4.7vh;
    }

    #id_search{
        width: 178px;
        height: 28px;
        margin-left:25px;
        display:inline;
        font-size: 0.87vw;
        background-color: rgb(118,112,112);
        color: white;
    }

    #join_btn{
        margin-left:25px;
        display:inline;
        font-size: 0.87vw;
        background-color: rgb(118,112,112);
        color: white;
        width: 120px;
        height: 28px;
    }

    
</style>