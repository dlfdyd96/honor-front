<template>
    <div>
        <table id="labels">
            <tr>
                <td  v-for="(label, index) in MenuObj" v-bind:key="index">
                    
                    <router-link to="/product">
                        <li 
                        @click="changeProductMenu( { keyValue : label.Specification })" 
                        @mouseover="MenuObj[index].ishover= true"
                        @mouseleave="MenuObj[index].ishover=false"
                         class="inactive"
                        :class="{ hoveractive: MenuObj[index].ishover }">
                            {{ label.name }}
                        </li><!-- 클릭시 색깔변경 추가 -->
                    
                    </router-link>
                </td>
            </tr>
        </table>
        <div id="main">
            
            <div class="info">
                <img class="itemPic" :src="getSelectedItem.Thumbnail">
                <div id="title">상품명 {{ getSelectedItem.Info }}</div>
                <div id="detail">
                    <p>판매가 {{getSelectedItem.LastPrice}}원</p>
                    <p>상품코드 {{getSelectedItem.Code}}</p>
                </div>
                <div id="item_btns">
                    <button id="show-modal" @click="showModal = true">구매</button>
                    <button>장바구니</button>
                    
                    <modal v-if="showModal" @close="showModal = false"><!--
                        you can use custom content here to overwrite
                        default content
                        -->
                        <h3 slot="header">알림!</h3>
                        <div slot="body">
                            신한 110-446-127623 (주:황일용)으로 15분 이내에 입금하세요!
                        </div>
                    </modal>
                </div>
            </div>
        </div>
        <div id="video">
        <video v-bind:src='Video' autoplay controls loop></video>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import Modal from './commons/Modal'

export default {
    data(){
        return{
            Video: require("@/assets/영상/2018_fall_명예옷장_메인영상.mp4"),
            MenuObj: [ 
                {name : "전체", menu:"all", Specification:"A", ishover:false},  //menu 속성 제거?
                {name : "상의", menu:"top", Specification:"T", ishover:false},
                {name : "하의", menu:"bottom", Specification:"B", ishover:false},
                {name : "외투", menu:"coat", Specification:"O", ishover:false},
                {name : "정장", menu:"suit", Specification:"S", ishover:false},
                {name : "잡화", menu:"miscellaneous", Specification:"G", ishover:false},
                {name : "기타", menu:"etc", Specification:"E", ishover:false}
            ],
            showModal: false,
        }
    },
    components : {
        Modal,
    },
    computed : {
        ...mapGetters(['getProducts','getSelectedItem'])
    },
    methods : {
        ...mapMutations(['changeProductMenu'])
    },
    created(){
        console.log(this.getSelectedItem)
    }
}
</script>

<style scoped>
    #main{
        padding-top: 3.9vh;
        padding-left: 12.6vw;
        padding-right: 12.6vw;
    }
    .itemPic{
        width:32.95vw;
        height: 32.95vw;
        float: left;
        margin-right: 4.7vw;
    }
    .info{
        
    }
    #title{
        font-size: 2.5vw;
        font-weight: bold;
        margin-bottom: 3vh;
    }
    #detail{
        font-size: 1.46vw;
        margin-top: 3vh;
        margin-bottom: 1vh;
    }
    p{
        margin-bottom: 2.6vh;
    }
    button{
        width: 12.2vw;
        height: 8.9vh;
        font-size: 1.45vw;
        background-color: rgb(118,112,112);
        color: white;
        margin-right: 2.4vw;
    }
    video{
        margin: auto;
        padding-top: 39.1vh;
        width: 69.55vw;
        height: 70.5vh;
    }
    #video{
        margin: auto;
        text-align: center;
        padding-bottom: 15vh;
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
    a{
        text-decoration: none;
    }
</style>