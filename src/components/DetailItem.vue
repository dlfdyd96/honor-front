<template>
    <div id="main">
        <div>
            <img class="itemPic" :src="getSelectedItem.Thumbnail">
            <div class="info">
                <div id="title">상품명 {{ getSelectedItem.Info }}</div>
                <div id="detail">
                    <p>판매가 {{getSelectedItem.LastPrice}}원</p>
                    <p>상품코드 {{getSelectedItem.Code}}</p>
                </div>
                <div id="item_btns">
                    <button>구매</button>
                    <button>장바구니</button>
                </div>
            </div>
        </div>
        
            <video v-bind:src='Video' autoplay controls loop></video>
        
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            Video: require("@/assets/영상/2018_fall_명예옷장_메인영상.mp4")
        }
    },
    computed : {
        ...mapGetters(['getProducts','getSelectedItem'])
    },
    created(){
        console.log(this.getSelectedItem)
    }
}
</script>

<style scoped>
    #main{
        margin-left: 172px;
    }
    .itemPic{
        width:450px;
        height: 450px;
        float: left;
        margin-right: 64px;
    }
    .info{

    }
    #title{
        font-size: 34px;
        margin-bottom: 27px;
    }
    #detail{
        font-size: 20px;
        margin-top: 27px;
        margin-bottom: 7px;
    }
    p{
        margin-bottom: 20px;
    }
    button{
        width: 167px;
        height: 68px;
        font-size: 1.45vw;
        background-color: rgb(118,112,112);
        color: white;
        margin-right: 32px;
    }
    video{
        margin-top: 300px;
        width: 950px;
        height: 540px;
    }
</style>