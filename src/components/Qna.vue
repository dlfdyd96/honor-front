<template>
    <div id='main'>
        <div class="wrap">
            <table class="noticeTable">
                <thead class="table">
                    <tr class="tableTitle">
                        <td>번호</td>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>작성일</td>
                        <td>조회수</td>
                    </tr>
                </thead>
                <tr class="qnalist" v-for="(qna, index) in this.getQna" :key="index">
                    <td>{{ qna.No }}</td><td>{{qna.Title}}</td><td>{{qna.Writer}}</td>
                    <td>{{qna.Date}}</td><td>{{qna.Hit}}</td>
                </tr>
            </table>
            <div class="search_line">
                <input type="text" class="search_box">
                <button class="searchBtn">검색</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed : {
        ...mapGetters(['getQna'])
    },
    methods: {
        ...mapActions(['getQnaServer'])
    },
    created() {
        this.getQnaServer();
    }
}
</script>

<style scoped>
    #main{
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
        width: 1036px;
        text-align: center;
        border-bottom: 2px solid rgb(128,128,128);
    }
    .qnalist{
        height: 42px;
        font-size: 20px;
        border-bottom: 1px solid rgb(128,128,128);
    }
    .table{
        font-size: 22px;
        background-color: transparent;
    }
    .tableTitle{
        border-bottom: 2px solid rgb(128,128,128);
    }

    .search_line{
        margin: auto;
        text-align: center;
        margin-top: 100px;
    }

    .searchBtn{
        background-color: rgb(118,112,112);
        color: white;
        border: 1px solid black;
        font-size: 1.3vw;
        width: 13vw;
        height: 5vh;
    }

    .search_box{
            border: 1px solid black;
            background-color: transparent;
            width: 22vw;
            height: 5vh;
            font-size: 100%;
        }
</style>