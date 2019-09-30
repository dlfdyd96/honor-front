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
                    {Title:"금오공대 '명예 옷장 프로젝트' 눈길", Date:"2019-05-05", Picture:"@/src/assets/article/IMG_3730_960.jpg"},
                    {Title:"금오공대 '명예 옷장 프로젝트'속 나눔의 기쁨", Date:"2018-12-26", Picture:"@/src/assets/article/IMG_3730_960.jpg"},
                    {Title:"금오공대 '명예 옷장 프로젝트' 눈길", Date:"2019-05-05", Picture:"@/src/assets/article/IMG_3730_960.jpg"},
                    {Title:"금오공대 '명예 옷장 프로젝트'속 나눔의 기쁨", Date:"2018-12-26", Picture:"@/src/assets/article/IMG_3730_960.jpg"},
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