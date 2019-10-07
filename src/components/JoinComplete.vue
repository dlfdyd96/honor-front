<template>
    <div id="complete">
        <div id="text">
            <p>명예옷장 회원가입이 완료되었습니다.</p>
            <p>감사합니다.</p>
            <p>왼쪽 상단의 아이콘을 누른 후 로그인이 가능합니다.</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #complete{
        display: table;
        min-height: 100vh;
        height: calc(100vh-89px);
        text-align: center;
        margin: auto;
    }
    #text{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        font-size: 2.2vw;
    }
    p{
        padding-bottom: 3.3vh;
    }
</style>