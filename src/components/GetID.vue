<template>
    <div id="findid">
        <div id="content">
            <p>아이디 찾기</p>
            <div id="getid">
                <div id="idget">회원님의 아이디는 { id } 입니다.</div>
            </div>
            <li>
                <router-link to="/login" tag="button">로그인</router-link>
                <router-link to="/findpw" tag="button">비밀번호 찾기</router-link>
            </li>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #findid{
        min-height: 100vh;
        height: calc(100vh-89px);
        display: table;
        margin: auto;
        text-align: center;
    }
    #content{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    p{
        font-size: 3.5vw;
        font-weight: bold;
        padding-bottom: 12.5vh;
    }
    li{
        list-style: none;
    }
    .textbox{
        color: black;
        font-size: 1.5vw;
        text-align: center;
        width: 22.8vw;
        height: 5vh;
        background-color: transparent;
        border: 1px solid;
        margin: 0.9vh;
    }
    button{
        margin: 0.7vw;
        width: 20vw;
        height: 5vh;
        font-size: 1.6vw;
        text-align: center;
        color: white;
        background-color: rgb(118,112,112);
        cursor: pointer;
    }
    #getid{
        display: table;
        width: 52vw;
        height: 8.5vh;
        background-color: rgb(211,209,210);
        margin-bottom: 5.5vh;
    }
    #idget{
        display: table-cell;
        vertical-align: middle;
        font-size: 1.9vw;
    }
</style>