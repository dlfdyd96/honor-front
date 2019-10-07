<template>
    <div id="findcomplete">
        <div id="content">
            <p>아이디 / 비밀번호 찾기가 완료되었습니다. 다시 로그인을 시도해 주세요.</p>
            
            <router-link to="/login" tag="button">확인</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #findcomplete{
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
        font-size: 1.9vw;
        padding-bottom: 66px;
    }
    
    
    button{
        width: 20vw;
        height: 5vh;
        font-size: 1.6vw;
        text-align: center;
        color: white;
        background-color: rgb(118,112,112);
        cursor: pointer;
    }
</style>