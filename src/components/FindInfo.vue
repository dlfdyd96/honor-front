<template>
    <div id="findinfo">
        <div id="btns">
            <router-link tag="button" to="/findid">아이디 찾기</router-link>
            <router-link tag="button" to="/findpw">비밀번호 찾기</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #findinfo{
        min-height: 100vh;
        height: calc(100vh-89px);
        display: table;
        margin: auto;
    }
    #btns{
        display: table-cell;
        vertical-align: middle;
    }
    button{
        width: 20vw;
        height: 10.2vh;
        font-size: 1.9vw;
        color: white;
        background-color: rgb(118,112,112);
        margin: 1.3vw;
        cursor: pointer;
    }
</style>