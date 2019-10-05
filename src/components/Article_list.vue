<template>
    <div class="article">
        <div class="articlelist" v-for="article in this.getArticles" v-bind:key="article.id">
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
    .article{
        padding-left: 2.8vw;
    }
    img{
        padding: 0;
        width: 28.5vw;
        height: 34.5vh;
        margin: 1.45vw;
        
    }
    .articlelist{
        padding: 0;
        display: inline-block;
        text-align: center;
    }
    .articlelist > p{
        margin: auto;
        overflow: hidden; 
        width: 28.5vw;
    }


</style>