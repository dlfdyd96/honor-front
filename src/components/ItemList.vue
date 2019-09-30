<template>
    <div id="main">
        <div class="list" v-for="item in Items" v-bind:key="item.Title">
            <img :src= "item.Picture" >
            <p>{{ item.Title }}</p>
            <p>{{ item.Price }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ItemList',
        data(){
            if(this.$store.state.MenuMode == "all"){
                return {
                    Items : [
                    {Title:"A", Price:"1234원", Picture:"http://202.31.202.253:5000/assets/image/behindcut/2018_fall_behindcut/spinning/IMG_0006_1_338.jpg"},
                    {Title:"B", Price:"3000원", Picture:"@/src/assets/article/IMG_3730_960.jpg"},
                    {Title:"C", Price:"30029원", Picture:"@/src/assets/article/IMG_3730_960.jpg"},
                    {Title:"D", Price:"20원", Picture:"@/src/assets/article/IMG_3730_960.jpg"},
                    ],
                }
            }
            else{
                return {
                    Items : [
                    {Title:"A", Price:"1234원", Picture:"@/src/assets/article/IMG_3730_960.jpg"},
                    {Title:"B", Price:"3000원", Picture:"@/src/assets/article/IMG_3730_960.jpg"},
                    
                    ],
                }
            }
        }
    }
</script>

<style scoped>
    #main{
        margin-left: 121px;
    }
    img{
        padding: 0;
        width: 338px;
        height: 338px;
    }

    .list{
        text-align: center;
        margin-top: 180px;
        margin-right: 55px;
        display: inline-block;
        margin-bottom: 100px;
    }


</style>