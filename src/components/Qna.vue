<template>
    <div class='main'>
        <div class="wrap">
            <table class="noticeTable">
                <thead class="table">
                    <tr class="tableTitle">
                        <td>번호</td>
                        <td>제목</td>
                        <td>작성일</td>
                        <td>작성자</td>
                    </tr>
                </thead>
                <tr class="qnalist" v-for="(qna, index) in this.getQna" :key="index">
                    <td>{{ qna.No }}</td>
                    <td @click="setSelectedBoard({ give : qna})">
                        <router-link to="/bulletin" id="qnaTitle">
                        {{qna.Title}}
                        </router-link>
                    </td>
                    <td>{{qna.createdAt.substring(0, 8)}}</td>
                    <td>{{qna.Writer}}</td>
                </tr>
            </table>
            <div class="write">
                <router-link to="/createqna" tag='button' id="createQnA">글쓰기</router-link>
            </div>
            <div class="search_line">
                <input type="text" class="search_box">
                <button class="searchBtn">검색</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    computed : {
        ...mapGetters(['getQna'])
    },
    methods: {
        ...mapMutations(['setSelectedBoard']),
        ...mapActions(['getQnaServer'])
    },
    created() {
        this.getQnaServer();
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
        color: black;
    }
    .main{
        margin: auto;
        display: table;
        min-height: 100vh;
        height: calc(100vh-89px);
		background-color: rgb(233, 236, 241);
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
    .qnalist{
        height: 5.5vh;
        font-size: 1.45vw;
        border-bottom: 1px solid rgb(128,128,128);
    }
    .table{
        font-size: 1.6vw;
        background-color: transparent;
    }
    .tableTitle{
        border-bottom: 2px solid rgb(128,128,128);
    }

    .search_line{
        position: relative;
        margin: auto;
        text-align: center;
        display: table;
        margin-top: 13vh;
    }
    .search_box{
        display: table-cell;
        vertical-align: middle;
        border: 1px solid black;
        background-color: transparent;
        width: 25.4vw;
        height: 5.7vh;
        font-size: 100%;
        margin-right: 1.15vw;
    }

    .searchBtn{
        display: table-cell;
        vertical-align: middle;
        background-color: rgb(118,112,112);
        color: white;
        border: 1px solid black;
        font-size: 1.45vw;
        width: 13.7vw;
        height: 5.7vh;
    }
    #qnaTitle{
        cursor: pointer;
    }
    .write{
        padding-left: 60vw;
        padding-top: 5vh;
    }
    #createQnA{
        background-color: rgb(118,112,112);
        color: white;
        border: 1px solid black;
        font-size: 1.45vw;
        width: 10vw;
        height: 5vh;
        cursor: pointer;
    }
</style>