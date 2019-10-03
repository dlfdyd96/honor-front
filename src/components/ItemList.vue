<template>
    <div id="main">
        <!-- <div class="list" v-for="item in Items" v-bind:key="item.Title"> -->
        <div class="list" v-for="(item) in getKindsOfProducts" v-bind:key="item.id">
            <!-- <img :src= "item.Thumbnail" @click="setSelectedItem( {id : item.id })"> -->
            <img :src= "item.Thumbnail" @click="setSelectedItem( {id : item.id })">
            <p>{{ item.Info }}</p>
            <p>{{ item.LastPrice }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    name: 'ItemList',
    /* 태성s
    data(){
        if(this.$store.state.MenuMode == "all"){
            return {
                Items : [
                {Title:"남자상의1", Price:"1234원", Picture:"http://202.31.202.253:5000/assets/image/product/top/male/Sclass/TMS-001.jpg "},
                {Title:"여자상의1", Price:"3000원", Picture:"http://202.31.202.253:5000/assets/image/product/top/female/Sclass/TFS-001.jpg"},
                {Title:"남자외투1", Price:"30029원", Picture:"http://202.31.202.253:5000/assets/image/product/coat/male/Sclass/OMS-001.jpg"},
                {Title:"정장", Price:"50000원", Picture:"http://202.31.202.253:5000/assets/image/product/suit/Sclass/SMS-001.jpg"},
                {Title:"남자외투2", Price:"50000원", Picture:"http://202.31.202.253:5000/assets/image/product/coat/male/Sclass/OMS-002.jpg"},
                {Title:"여자상의3", Price:"50000원", Picture:"http://202.31.202.253:5000/assets/image/product/top/female/Bclass/TFB-003.jpg "},
                
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
    },
    */
    computed : {
        ...mapGetters(['getKindsOfProducts'])
    },
    methods: {
        ...mapActions(['getProductServer', 'setSelectedItem'])
    },
    created() {
        this.$store.state.productMenu = "A";
        this.getProductServer();
    },
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
        margin-top: 50px;
        margin-right: 55px;
        display: inline-block;
        margin-bottom: 100px;
    }


</style>