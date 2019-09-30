<template>
    <div id="main">
        <div class="list" v-for="article in Articles" v-bind:key="article.Title">
            <img :src= "article.Picture" >
            <p>{{ article.Title }}</p>
            <p>{{ article.Date }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                Articles : [
                    {Title:"금오공대 '명예 옷장' 행사 수익금 어린이재단 기탁", Date:"2018-12-22", Picture:"http://202.31.202.253:5000/assets/image/article/article1.jpg"},
                    {Title:"금오공대 '명예 옷장 프로젝트'속 나눔의 기쁨", Date:"2018-12-20", Picture:"http://202.31.202.253:5000/assets/image/article/article2.jpg"},
                    {Title:"금오공대 '명예 옷장 프로젝트' 눈길", Date:"2019-05-05", Picture:"http://202.31.202.253:5000/assets/image/article/article3.jpg"},
                    {Title:"금오공대, ‘명예 옷장’ 기부 프로젝트 펼쳐", Date:"2018-12-20", Picture:"http://202.31.202.253:5000/assets/image/article/article4.jpg"},
                ],
            }
        }
    }
</script>

<style scoped>
    #main{
        margin-top: 10px;
        margin-left: 58px;
    }
    img{
        padding: 0;
        width: 390px;
        height: 265px;
    }

    .list{
        margin-right: 40px;
        display: inline-block;
        margin-bottom: 100px;
    }


</style>