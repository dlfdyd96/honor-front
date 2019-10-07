<template>
<div class="slideImage">
	<!-- <MenuForm></MenuForm> -->
	<span class="menuContainer" v-on:click="this.toggle">
		<i class="fas fa-bars menubars"></i>
	</span>
	<Sidebar>
		<ul class="categorys">
			<li>
				<div class="introCategory" @mouseover="inst_hovering" @mouseout="inst_hovering">
					<span >
						소개
					</span>
					<transition name="fade">
						<div v-show="inst_hover">
							<ul class="CategoryList">
								<li class="submenu"><router-link to="/planmodel">기획의도</router-link></li>
								<li class="submenu"><router-link to="/bm">비즈니스 모델</router-link></li>
								<li class="submenu"><router-link to="/contributor">기부자 명단</router-link></li>
								<li class="submenu"><router-link to="/members">멤버들 소개</router-link></li>
							</ul>
						</div>
					</transition>
				</div>
			</li>
			<li><div class="collectionCategory" @mouseover="collect_hovering" @mouseout="collect_hovering">
					<span >
						컬렉션
					</span>
					<transition name="fade">
						<div v-show="collect_hover">
							<ul class="CategoryList">
								<li class="submenu"><router-link to="/collection">2019 Fall</router-link></li>
								<li class="submenu"><router-link to="/collection">2019 Spring</router-link></li>
								<li class="submenu"><router-link to="/collection">2018 Fall</router-link></li>
							</ul>
						</div>
					</transition>
				</div>
			</li>
			<li><router-link to="/product">상품</router-link></li>
			<li>
				<div class="behindCategory" @mouseover="behind_hovering" @mouseout="behind_hovering">
					<span >
						비하인드컷
					</span>
					<transition name="fade">
						<div v-show="behind_hover">
							<ul class="CategoryList">
								<li class="submenu"><router-link to="/fall19">2019 Fall</router-link></li>
								<li class="submenu"><router-link to="/spring19">2019 Spring</router-link></li>
								<li class="submenu"><router-link to="/fall18">2018 Fall</router-link></li>
							</ul>
						</div>
					</transition>
				</div>
			</li>
			<li><router-link to="/article">기사</router-link></li>
			<li><router-link to="/notice">공지사항</router-link></li>
			<li><router-link to="/qna">질의응답</router-link></li>
		</ul>
	</Sidebar>
	
	<span class="loginContainer">
		<router-link v-if="this.$store.state.loginStatus == null" to="/login"><i class="fas fa-user loginBtn"></i> </router-link>
		<router-link v-else to="/mypage"><i class="fas fa-user loginBtn"></i> </router-link>
	</span>
	<span class="homeContainer"> <router-link to="/"><i class="fas fa-home homeBtn"></i> </router-link></span>
	<span class="snsContainer"> 
		<a href="https://www.instagram.com/honors.closet/"><i class="fab fa-instagram instaBtn"></i></a>
		<a href="https://www.youtube.com/channel/UCr52suELwXnTMQ0DfoK3x9g"><i class="fab fa-youtube youtubeBtn"></i></a>
	</span>
</div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import { mapGetters, mapMutations } from 'vuex'

export default {
	data() {
		return {
			collect_hover:false,
			inst_hover : false,
			behind_hover : false,
		}
	},
	components: {
		//MenuForm,
		Sidebar,
	},
	computed : {
		...mapGetters({
			getPanelIs : 'getPanelIs',
		})
	},
	methods : { 
		...mapMutations({
			toggle : 'togglePanel'
		}),
		inst_hovering(){
			this.inst_hover = !this.inst_hover;
		},
		behind_hovering(){
			this.behind_hover = !this.behind_hover;
		},
		collect_hovering(){
			this.collect_hover = !this.collect_hover;
		}
	}
}
</script>

<style scoped>
	.menuContainer {
        position: fixed;
		top: 16px;
		left: 16px;
        z-index: 1000;
    }
    .menubars {
        font-size: 1.5rem;
        color : #322F42;
    }
    .loginContainer {
        position: fixed;
		top: 16px ;
		right: 16px;
        z-index: 1000;
    }
    .loginBtn {
        font-size: 1.5rem;
		text-decoration: none;
		color : #322F42;
    }
    .homeContainer {
        position: fixed;
		bottom: 16px ;
		left: 16px;
        z-index: 1000;
    }
    .homeBtn {
        font-size: 1.5rem;
		text-decoration: none;
		color : #322F42;
    }
    .snsContainer {
        position: fixed;
		bottom: 16px ;
		right: 16px;
        z-index: 1000;
    }
    .instaBtn {
        font-size: 1.5rem;
		text-decoration: none;
		margin : 1px;
		color : #322F42;
    }
    .youtubeBtn {
        font-size: 1.5rem;
		text-decoration: none;
		margin : 1px;
		color : #322F42;
    }
li{
	list-style: none;
	margin-top: 5.2vh;
	font-size: 1.33vw;
}
.submenu{
	margin-top: 3.25vh;
}
a { 
	text-decoration:none ; 
	color:#000000
	
}

 ul.sidebar-panel-nav {
   list-style-type: none;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
   
 }
 .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.CategoryList {
	margin-left: 30px;
}
span{
	color: black;
}
@media(max-width:600px){
	li{
		font-size: 5vw;
		font-weight: bold;
	}
}
</style>