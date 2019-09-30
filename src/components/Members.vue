<template>
    <div id='main'>
        <div class="Container" >
            <div  v-for="member in this.getMembers" :key="member.index" >
                <div id="season">{{member.season}}</div>
                <div id = "imagesContainer">
                    <div id="images" v-for="(people, index) in member.peoples" :key="index" @mouseover="image_hover" @mouseout="image_hover">
                        <div class="imagecover" v-show="hover">{{ people.Name }}</div>
                        <img src="http://202.31.202.253:5000/assets/image/behindcut/2018_fall_behindcut/spinning/IMG_0006_1_338.jpg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            hover : false
        }
        
    },
    computed : {
        ...mapGetters({
            getMembers:'getMembers'
        }),
    },
    methods:{
        image_hover(){
            this.hover=!this.hover;
        }

    }
}
</script>

<style scoped>
    #main{
        overflow: auto;
        min-height: 100vh;
        height: calc(100vh-89px);
		background-color: rgb(233, 236, 241);
        
    }
    .member_background {
    background-color: rgb(233, 236, 241);
    height: 100%;
    width : 100%;
}
    .Container{
        margin-left: 129px;
    }
#images {
    margin-top: 52px;
    margin-right: 52px;
    display: inline-block;
}
img{
    width: 180px;
    height: 180px;
}
.imagecover{
    position:absolute;
    text-align: center;
    color: white;
    width: 180px;
    height: 180px;
    background-color: rgba(0, 0, 0, 0.8);
    font-size: 22px; 
}
#season{
    font-size: 30px;
    margin-top: 20px;
}

</style>