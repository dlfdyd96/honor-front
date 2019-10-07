<template>
    <div id="withdraw">
        <div id="content">
            <p>회원 탈퇴</p>
            <li><input class="textbox" type="text" placeholder="아이디"/></li>
            <li><input class="textbox" type="password" placeholder="비밀번호"/></li>
            <router-link id="confirmBtn" to="completeWithdraw" tag="button">확인</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #withdraw{
        min-height: 100vh;
        height: calc(100vh-89px);
        display: table;
        margin: auto;
    }

    #content{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    p{
        font-weight: bold;
        font-size: 3.5vw;
        color: black;
        padding-bottom: 11vh;
    }
    .textbox{
        width: 23vw;
        height: 38px;
        background-color: rgb(233, 236, 241);
        border-color: black;
        border: 1px solid;
        color: black;
        font-size: 1.5vw;
        text-align: center;
    }
    li{
        list-style: none;
        margin: 1vh;
    }
    #confirmBtn{
        width: 12vw;
        height: 44px;
        margin-top: 2.6vh;
        font-size: 1.6vw;
        color: white;
        background-color: rgb(118,112,112);
        cursor: pointer;
    }
</style>