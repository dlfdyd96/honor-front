<template>
    <div id="mypage">
        <div id="content">
            <p class="title">"{{ this.$store.state.userId }}" 고객님의 마이페이지</p>
            <ul>
                <li class="menuline">
                    <router-link to="/myitemlist" tag="div" class="menu"
                    @mouseover.native="menu1 = true"
                    @mouseleave.native="menu1 = false"
                    @click.native="getLikeServer({userId : getUserId})"
                    :class="{ menuhover: menu1} ">
                    <div class="menucompo">
                        <li class="markerline">
                            <img class="heartmark" src="@/assets/heart_20px.png"/>
                            <p class="menutitle">찜한 상품</p>
                        </li>
                        <p class="menucontent">관심 상품으로 등록하신</p>
                        <p class="menucontent">삼품의 목록을 보여드립니다.</p>
                    </div>
                    <div class="arrowline">
                        <img class="arrowbtn" src="@/assets/arrowright_80px.png"/>
                    </div>
                </router-link></li>
                <li class="menuline"><router-link to="/myitemlist" tag="div" class="menu"
                    @mouseover.native="menu2 = true"
                    @mouseleave.native="menu2 = false"
                    @click.native="getPurchaseList"
                    :class="{ menuhover: menu2} ">
                    <div class="menucompo">
                        <p class="menutitle">주문내역조회</p>
                        <p class="menucontent">상품의 주문처리상태를</p>
                        <p class="menucontent">보여드립니다.</p>
                    </div>
                    <div class="arrowline">
                        <img class="arrowbtn" src="@/assets/arrowright_80px.png"/>
                    </div>
                </router-link></li>
            </ul>
            <ul>
                <li class="menuline"><router-link to="/myitemlist" tag="div" class="menu"
                    @mouseover.native="menu3 = true"
                    @mouseleave.native="menu3 = false"
                    @click.native="getCartServer({userId : getUserId})"
                    :class="{ menuhover: menu3} ">
                    <div class="menucompo">
                        <p class="menutitle">장바구니에 담은 상품</p>
                        <p class="menucontent">장바구니에 담은</p>
                        <p class="menucontent">상품의 목록을 보여드립니다.</p>
                    </div>
                    <div class="arrowline">
                        <img class="arrowbtn" src="@/assets/arrowright_80px.png"/>
                    </div>
                </router-link></li>
                <li class="menuline"><router-link to="/modification" tag="div" class="menu"
                    @mouseover.native="menu4 = true"
                    @mouseleave.native="menu4 = false"
                    :class="{ menuhover: menu4} ">
                    <div class="menucompo">
                        <p class="menutitle">회원정보수정 / 회원탈퇴</p>
                        <p class="menucontent">고객님의 회원정보를</p>
                        <p class="menucontent">수정할 수 있습니다.</p>
                    </div>
                    <div class="arrowline">
                        <img class="arrowbtn" src="@/assets/arrowright_80px.png"/>
                    </div>
                </router-link></li>
            </ul>
            <div @click="setLogoutStatus">
                <router-link to="/login" tag="button" id="logoutBtn">로그아웃</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
    export default {
        data(){
            return{
                menu1: false,
                menu2: false,
                menu3: false,
                menu4: false,
            }
        },
        computed : {
            ...mapGetters(['getUserId'])
        },
        methods : {
            ...mapActions(['getCartServer', 'getLikeServer']),
            ...mapMutations(['setLogoutStatus', 'getPurchaseList'])
        }
    }
</script>

<style scoped>
    #mypage{
        display: table;
        min-height: 100vh;
        width: 100%;
        height: calc(100vh-89px);
    }
    #content{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        margin: auto;
    }
    .menuline{
        display: inline-block;
        margin-bottom: 1.3vh;
        margin-top: 1.3vh;
    }

    .menu{
        display: table;
        text-align: left;
        width: 29.7vw;
        height: 17.7vh;
        background-color: rgb(243, 246, 252);
        border: 1px solid rgb(128,128,128);
        margin-left: 2vw;
        margin-right: 2vw;
        cursor: pointer;
    }
    .menucompo{
        display: table-cell;
        vertical-align: middle;
        padding-left: 0.7vw;
    }
    .menutitle{
        display: table-cell;
        vertical-align: middle;
        font-size: 1.6vw;
        font-weight: bold;
        padding-bottom: 2.7vh;
    }
    .menucontent{
        font-size: 1.46vw;
    }
    .title{
        font-size: 1.9vw;
        font-weight: bold;
        padding-bottom: 8.6vh;
    }
    #logoutBtn{
        font-size: 1.33vw;
        text-align: center;
        width: 9vw;
        height: 3.4vh;
        background-color: rgb(118,112,112);
        color: white;
        margin-top: 11.5vh;
    }
    .heartmark{
        display: table-cell;
        vertical-align: middle;
        width: 1.5vw;
        height: 1.5vw;
        padding: 0.2vw;
        padding-right: 0.4vw;
    }
    .markerline{
        display: table;
    }
    .arrowbtn{
        width: 1vw;
        height: 4vh;
    }
    .arrowline{
        display: table-cell;
        vertical-align: middle;
    }
    .menuhover{
        display: table;
        text-align: left;
        width: 29.7vw;
        height: 17.7vh;
        background-color: rgb(243, 246, 252);
        border: 3px solid rgb(128,128,128);
        margin-left: 2vw;
        margin-right: 2vw;
        cursor: pointer;
        box-sizing: border-box;
    }
</style>