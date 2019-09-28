<template>
    <div id='main'>
        <table class="noticeTable">
            <thead>
                <tr>
                    <td>번호</td>
                    <td>제목</td>
                    <td>작성일</td>
                    <td>작성자</td>
                    <td>조회수</td>
                </tr>
            </thead>
            <tr v-for="(notice, index) in notice" :key="notice.title">
                <td>{{ doMath(index) }}</td><td>{{notice.title}}</td><td>{{notice.date}}</td>
                <td>{{notice.writer}}</td><td>{{notice.view}}</td>
            </tr>
        </table>
        <div class="search_line">
            <input type="text" class="search_box">
            <button>검색</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                notice:[
                    {title:"명예옷장 off-line 날짜", date:'2019-10-11', writer:'강민정', view:'3'},
                    {title:"명예옷장 on-line 날짜", date:'2019-10-01', writer:'강민정', view: '9'}
                ]
            }
        },
        methods: {
            doMath: function(index){
                return index+1
            }
        }
    }
</script>

<style lang="scss" scoped>
    #main{
        min-height: 100vh;
        height: calc(100vh-89px);
		background-color: rgb(233, 236, 241);
    }
    .noticeTable{
        position: relative;
        border-collapse: collapse;
        margin: auto;
        top: 164px;
        width: 1036px;
        text-align: center;
        border-bottom: 2px solid rgb(128,128,128);
        thead{
            font-size: 22px;
            background-color: transparent;
            tr{
                border-bottom: 2px solid rgb(128,128,128);
            }
        }
        tr{
            height: 42px;
            font-size: 20px;
            border-bottom: 1px solid rgb(128,128,128);
        }
    }

    .search_line{
        position: relative;
        margin: auto;
        text-align: center;
        top: 70vh;
        .search_box{
            border: 1px solid black;
            background-color: transparent;
            width: 22vw;
            height: 5vh;
            font-size: 100%;
        }
        button{
            background-color: rgb(118,112,112);
            color: white;
            border: 1px solid black;
            font-size: 1.3vw;
            width: 13vw;
            height: 5vh;
        }
    }
</style>