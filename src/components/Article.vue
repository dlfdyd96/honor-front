<template>
    <div id="main">
        <section id="article_option">
            <a>{{ articleNum }}건 기사</a>
            <table id='labels'>
                <tr>
                    <td v-for="label in MenuObj" v-bind:key="label.menu">
                        <li>{{ label.name }}</li>
                    </td>
                </tr>
            </table>
        </section>
        <ArticleList></ArticleList>
    </div>
</template>

<script>
    import ArticleList from '@/components/Article_list'
    export default {
        name: 'Article_List',
        components: {
            ArticleList
        },
        data(){
            return{
                MenuObj: [ 
                    {name : "등록 순 | ", menu:"all"},
                    {name : "인기 순 | ", menu:"top"},
                    {name : "조회 순 | ", menu:"bottom"},
                    {name : "댓글 순", menu:"coat"},
                 ],
                 articleNum: 4,
            }
        }
    }
</script>

<style lang="scss" scoped>
    #main{
        overflow: auto;
        min-height: 100vh;
        height: calc(100vh-89px);
		background-color: rgb(233, 236, 241);
    }

    #article_option{
        padding-left: 62px;
        padding-top: 74px;
    }
    #labels{
        
        font-size: 1.45vw;
        li{
            cursor: pointer;
            font-size: 1.3vw;
            list-style: none;
            text-decoration: none;
            color: black;
            &:hover {
                color: rgb(168, 168, 168);
            }
        }
    }

</style>