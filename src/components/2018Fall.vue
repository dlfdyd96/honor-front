<template>
    <div class='main'>
        <div class="container">
            <!--<video v-bind:src='Video' autoplay controls loop></video>-->
            <div class="main_photo">
                <div class="list" v-for="(item,index) in get18FallBehind" v-bind:key="index">
                    <img :src="item.Image" >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
//import Photo from '@/components/BehindPhoto'

export default {
    // components : {
    //     Photo,
    // },
    data(){
        return{
            Video: require("@/assets/영상/2018_fall_명예옷장_메인영상.mp4")
        }
    },
    computed : {
        ...mapGetters(['get18FallBehind']),
    },
    methods: {
        ...mapActions(['getBehindServer'])
    },
    created() {
        this.getBehindServer();
    }
}
</script>

<style scoped>
    .main{
        min-height: 100vh;
        height: calc(100vh-89px);
		background-color: rgb(233, 236, 241);
        margin: auto;
        display: table;
        padding-top: 15.7vh;
        
    }
    .container{
        display: table-cell;
        vertical-align: middle;
        margin: auto;
        
    }
    video{
        width: 70.3vw;
        height: 70.3vh;
    }
    .main_photo{
        text-align: center;
    }
    img{
        padding: 0;
        width: 24.75vw;
        height: 24.75vw;
    }

    .list{
        text-align: center;
        margin: 2vw;
        display: inline-block;
        margin-bottom: 10.5vh;
    }
</style>