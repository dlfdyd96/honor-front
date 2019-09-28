<template>
<div class="slideImage">
	<!-- <MenuForm></MenuForm> -->
	<Burger></Burger>
	<Sidebar>
		<ul class="categorys">
			<li>
				<div class="introCategory">
					<span @click="inst_hovering">
						소개
					</span>
					<transition name="fade">
						<div v-if="inst_hover">
							<ul class="introCategoryList">
								<li><router-link to="/planmodel">기획의도</router-link></li>
								<li><router-link to="/bm">비즈니스 모델</router-link></li>
								<li><router-link to="/contributor">기부자 명단</router-link></li>
							</ul>
						</div>
					</transition>
				</div>
			</li>
			<li><router-link to="/collection">컬렉션</router-link></li>
			<li><router-link to="/product">상품</router-link></li>
			<li>
				<div class="behindCategory">
					<span @click="behind_hovering">
						비하인드컷
					</span>
					<transition name="fade">
						<div v-if="behind_hover">
							<ul class="behindCategoryList">
								<li><router-link to="/fall19">2019 Fall</router-link></li>
								<li><router-link to="/spring19">2019 Spring</router-link></li>
								<li><router-link to="/fall18">2018 Fall</router-link></li>
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
	
	<span class="loginContainer"> <router-link to="/login"><i class="fas fa-user loginBtn"></i> </router-link></span>
	<span class="homeContainer"> <router-link to="/"><i class="fas fa-home homeBtn"></i> </router-link></span>
	<span class="snsContainer"> 
		<a href="http://www.instagram.com"><i class="fab fa-instagram instaBtn"></i></a>
		<a href="http://www.youtube.com"><i class="fab fa-youtube youtubeBtn"></i></a>
	</span>
</div>
</template>

<script>
import Burger from './Burger.vue';
import Sidebar from './Sidebar.vue';
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			inst_hover : false,
			behind_hover : false,
		}
	},
	components: {
		//MenuForm,
		Burger,
		Sidebar,
	},
	methods : {
		...mapGetters(['getPanelIs']),
		inst_hovering(){
			this.inst_hover = !this.inst_hover;
		},
		behind_hovering(){
			this.behind_hover = !this.behind_hover;
		},
	}
}
</script>

<style scoped>
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
.introCategoryList {
	margin-left: 30px;
}
.behindCategoryList {
	margin-left: 30px;
}
</style>