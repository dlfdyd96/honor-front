<template>
  <div class='main'>
      <video v-bind:src='Video' autoplay controls loop></video>
      <photo id="photo"></photo>
        
    </div>
</template>

<script>
import photo from '@/components/CollectionPhoto'
export default {
  components:{
    photo,
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
        padding-top: 8%;
    }
    video{
        width: 70.3vw;
        height: 70.3vh;
    }
    #photo{
      padding-top: 10%;
      padding-bottom: 8%;
    }
</style>