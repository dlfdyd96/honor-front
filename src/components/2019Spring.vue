<template>
    <div class='main'>
        <div class="container">
            <video v-bind:src='Video' autoplay controls loop></video>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            Video: require("@/assets/영상/2019_spring_명예옷장_메인영상.mp4")
        }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        position:absolute;
        top:50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%)
    }
    video{
        width: 70.3vw;
        height: 70.3vh;
    }
    .main{
        min-height: 100vh;
        height: calc(100vh-89px);
		background-color: rgb(233, 236, 241);
        text-align: center;
    }
</style>