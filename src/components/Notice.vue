<template>
    <div class='main'>
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
                <tr class="noticelist" v-for="(notice, index) in this.getNotice" :key="index">
                    <td>{{ notice.No }}</td>
                    <td @click="setSelectedBoard({ give : notice})">
                        <router-link to="/bulletin" id="noticeTitle">
                            {{notice.Title}}
                        </router-link>
                    </td>
                    <td>{{notice.Writer}}</td>
                    <td>{{notice.Date}}</td><td>{{notice.Hit}}</td>
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
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    computed : {
        ...mapGetters(['getNotice'])
    },
    methods: {
        ...mapMutations(['setSelectedBoard']),
        ...mapActions(['getNoticeServer'])
    },
    created() {
        this.getNoticeServer();
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
        width: 1036px;
        text-align: center;
        border-bottom: 2px solid rgb(128,128,128);
    }
    .table{
        font-size: 22px;
        background-color: transparent;
    }
    .tableTitle{
        border-bottom: 2px solid rgb(128,128,128);
    }
    .noticelist{
        height: 42px;
        font-size: 20px;
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