<template>
    <div class='main'>
        <div class="container">
            <video v-bind:src='Video' autoplay controls loop></video>
            <!--<Photo></Photo>-->
        </div>
    </div>
</template>

<script>
import Photo from '@/components/BehindPhoto'
export default {
    components : {
        Photo,
    },
    data(){
        return{
            Video: require("@/assets/영상/2018_fall_명예옷장_메인영상.mp4")
        }
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
</style>