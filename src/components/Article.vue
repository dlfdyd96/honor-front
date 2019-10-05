<template>
    <div>
        <div id="article_option">
            <a>{{ articleNum }}건 기사</a>
            <table id='labels'>
                <tr>
                    <td class="inactive" v-for="(label,index) in MenuObj" v-bind:key="index">
                        <li 
                        @mouseover="MenuObj[index].ishover= true"
                        @mouseleave="MenuObj[index].ishover= false"
                        :class="{ hoveractive: MenuObj[index].ishover }">{{ label.name }}</li>
                    </td>
                </tr>
            </table>
        </div>
        <ArticleList></ArticleList>
        <div class="search_line">
            <input type="text" class="search_box">
            <button class="searchBtn">검색</button>
        </div>
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
                {name : "등록 순", menu:"all", ishover:false},
                {name : "인기 순", menu:"top",ishover:false},
                {name : "조회 순", menu:"bottom",ishover:false},
                {name : "댓글 순", menu:"coat",ishover:false},
                ],
                articleNum: 4,
        }
    }
}
</script>

<style scoped>
    .article_option{
        margin: auto;
        display: table;
        min-height: 100vh;
        height: calc(100vh-89px);
		background-color: rgb(233, 236, 241);
    }
    #labels{
        position: relative;
        margin: auto;
        font-size: 1.45vw;
        border-spacing: 4.4vw;
    }
    .inactive{
        cursor: pointer;
        font-size: 1.3vw;
        list-style: none;
        text-decoration: none;
        color: black;
    }
    .hoveractive{
        cursor: pointer;
        font-size: 1.3vw;
        list-style: none;
        text-decoration: none;
        color: rgb(175, 175, 175);
    }




    .wrap{
        display: table-cell;
        vertical-align: middle;
        margin: auto;
    }
    .noticeTable{
        position: relative;
        border-collapse: collapse;
        margin: auto;
        width: 76vw;
        text-align: center;
        border-bottom: 2px solid rgb(128,128,128);
    }
    .table{
        font-size: 1.6vw;
        background-color: transparent;
    }
    .tableTitle{
        border-bottom: 2px solid rgb(128,128,128);
    }
    .noticelist{
        height: 5.5vh;
        font-size: 1.45vw;
        border-bottom: 1px solid rgb(128,128,128);
    }
    .search_line{
        position: relative;
        margin: auto;
        text-align: center;
        margin-top: 13vh;
    }
    .search_box{
        border: 1px solid black;
        background-color: transparent;
        width: 25.4vw;
        height: 5.7vh;
        font-size: 100%;
        margin-right: 1.15vw;
    }

    .searchBtn{
        background-color: rgb(118,112,112);
            color: white;
            border: 1px solid black;
            font-size: 1.45vw;
            width: 13.7vw;
            height: 5.8vh;
    }
    #noticeTitle{
        cursor: pointer;
    }
</style>