<template>
    <div id="withdraw">
        <div id="content">
            <p>명예옷장 회원 탈퇴가 완료되었습니다.</p>
            <p>감사합니다.</p>
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
        font-size: 2.2vw;
    }
</style>