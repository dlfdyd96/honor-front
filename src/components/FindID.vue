<template>
    <div id="findid">
        <div id="content">
            <p>아이디 찾기</p>
            <li><input type="text" placeholder="이름" class="textbox"></li>
            <li><input type="text" placeholder="생년월일" class="textbox"></li>
            <li><router-link to="/getid" tag="button">확인</router-link></li>
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
        margin-top: 2.7vh;
        width: 12vw;
        height: 5.8vh;
        font-size: 1.6vw;
        text-align: center;
        color: white;
        background-color: rgb(118,112,112);
        cursor: pointer;
    }
</style>