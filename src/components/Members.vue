<template>
    <div class='main'>
        <div id="container" v-for="(group, index) in getMembers" :key="index">
            <div id="season">{{ group.Season }}</div>
            <div id="members" v-for="(people,index) in group.Peoples" :key="index">
                <div id="hoverimg">
                    <div>
                        <p>{{ people.Name }}</p>
                        <p>{{ people.major }}</p>
                    </div>
                </div>
                <img id="memberimg" :src="people.Image">
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {
             hover: false,
        }
    },
    computed : {
        ...mapGetters(['getMembers']),
    },
    methods:{
        image_hover(){
            this.hover=!this.hover;
        },
        ...mapActions(['getMemberServer']),
    },
    created() {
        this.getMemberServer();
    }
}
</script>

<style scoped>
    .main{
        padding-left: 7vw;
        padding-right: 7vw;
        text-align: left;
    }
    #season{
        border-bottom: 3px solid rgb(118,112,112);
        padding-top: 70px;
        margin-bottom: 26px;
        margin-left: 2vw;
        width: 300px;
        font-weight: bold;
        font-size: 26px;
        padding-bottom: 5px;
    }
    #memberimg{
        width: 180px;
        height: 180px;
        margin: 26px;
    }

    #members{
        display: inline-block;
    }

    #hoverimg{
        position: absolute;
        width: 180px;
        height: 180px;
        margin: 26px;
        background-color: transparent;
        font-size: 0px;
    }

    #hoverimg:hover{
        position: absolute;
        width: 180px;
        height: 180px;
        margin: 26px;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        font-size: 22px;
        text-align: center;
        display: table;
    }
    #hoverimg > div{
        display: table-cell;
        vertical-align: middle;
    }

    @media(max-width: 600px){
        
    }
</style>