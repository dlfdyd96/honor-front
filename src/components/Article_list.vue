<template>
    <div id="main">
        <div class="list" v-for="article in this.getArticles" v-bind:key="article.id">
            <img :src= "article.Thumbnail" >
            <p>{{ article.Title }}</p>
            <p>{{ article.Date }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed : {
        ...mapGetters(['getArticles'])
    },
    methods: {
        ...mapActions(['getArticleServer'])
    },
    created() {
        this.getArticleServer();
    }
}
</script>

<style scoped>
    #main{
        margin-top: 10px;
        margin-left: 58px;
    }
    img{
        padding: 0;
        width: 390px;
        height: 265px;
    }

    .list{
        margin-right: 40px;
        display: inline-block;
        margin-bottom: 100px;
    }


</style>