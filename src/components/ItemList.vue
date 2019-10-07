<template>
    <div>
        <!-- <div class="list" v-for="item in Items" v-bind:key="item.Title"> -->
        <div class="list" v-for="(item) in getKindsOfProducts" v-bind:key="item.id">
            <!-- <img :src= "item.Thumbnail" @click="setSelectedItem( {id : item.id })"> -->
            <div v-if="item.Progress == 3" class="imagecover"><p class="soldout">SOLD OUT</p></div>
            <div v-if="item.Progress == 2" class="imagecover"><p class="soldout">Reserved</p></div>
            <router-link to="/product/detail">
                <img :src="item.Thumbnail" @click="setSelectedItem( item )">
            </router-link>
             <!-- <p class="iteminfo">{{ item.Info }}</p> -->
            <p class="iteminfo">{{ item.LastPrice }} ₩</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    name: 'ItemList',
    computed : {
        ...mapGetters(['getKindsOfProducts'])
    },
    methods: {
        ...mapMutations(['setSelectedItem']),
        ...mapActions(['getProductServer'])
    },
    created() {
        this.getProductServer();
    },
}
</script>

<style scoped>
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

    .iteminfo
    {
        width: 24.75vw;
        font-size: 1.46vw;
        margin-top: 2.6vh;
    }
    .imagecover{
        position: absolute;
        text-align: center;
        color: white;
        width: 24.75vw;
        height: 24.75vw;
        background-color: rgba(0, 0, 0, 0.8);
        font-size: 22px;
        display: table;
    }
    .soldout{
        display: table-cell;
        vertical-align: middle;
    }
</style>