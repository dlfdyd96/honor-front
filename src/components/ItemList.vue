<template>
    <div id="main">
        <!-- <div class="list" v-for="item in Items" v-bind:key="item.Title"> -->
        <div class="list" v-for="(item) in getKindsOfProducts" v-bind:key="item.id">
            <!-- <img :src= "item.Thumbnail" @click="setSelectedItem( {id : item.id })"> -->
            <router-link to="/product/detail">
                <img :src="item.Thumbnail" @click="setSelectedItem( {id : item.id })">
            </router-link>
            <p>{{ item.Info }}</p>
            <p>{{ item.LastPrice }}</p>
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
    #main{
        padding-left: 6.82vw;
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

    p{
        font-size: 1.46vw;
        margin-top: 2.6vh;
    }

</style>