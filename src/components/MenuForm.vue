<template>
	<div>	
		<div class="container" :class="{'show' : showSidebar}">
			<div class="control">
				<i class="fas fa-angle-double-right" @click="showNav"></i>
			</div>
			
			<div class="navigation-links">
				<transition-group name="fade">
					<div v-show="showLink" key="1">소개
						<ul>
							<router-link tag="li" active-class="active" to="/1">기획의도</router-link>
							<router-link tag="li" active-class="active" to="/2">비즈니스 모델</router-link>
							<router-link tag="li" active-class="active" to="/3">기부자 명단</router-link>
						</ul>
					</div>
					<div v-show="showLink" key="2">컬렉션
						<ul>
							<router-link tag="li" active-class="active" to="/4">2019Fall</router-link>
							<router-link tag="li" active-class="active" to="/5">2019 Spring</router-link>
							<router-link tag="li" active-class="active" to="/6">2018 Fall</router-link>
						</ul>
					</div>
					<div v-show="showLink" key="3">
						<router-link tag="li" active-class="active" to="/7">상품</router-link>
					</div>
					<div v-show="showLink" key="4">비하인드컷
						<ul>
							<router-link tag="li" active-class="active" to="/8">2019Fall</router-link>
							<router-link tag="li" active-class="active" to="/9">2019 Spring</router-link>
							<router-link tag="li" active-class="active" to="/10">2018 Fall</router-link>
						</ul>
					</div>
					<div v-show="showLink" key="5">기사</div>
					<div v-show="showLink" key="6"><router-link tag="li" active-class="active" to="/12">공지사항</router-link></div>
					<div v-show="showLink" key="7">질의응답</div>
				</transition-group>
			</div>
		</div>
		<div class="LoginContainer">
			<router-link tag="i" class="LoginBtn fas fa-user" aria-hidden="true" to="/login"></router-link>
			
		</div>
		<div class="HomeContainer">
			<router-link tag="i" class="HomeBtn fas fa-home" aria-hidden="true" to="/"></router-link>
		</div>
		<div class="LogoContainer">
			<a href="https://www.instagram.com/honors.closet/" target="_blank"><i class="InstaBtn fab fa-instagram" aria-hidden="true" ></i></a>
			<a href="https://www.youtube.com/channel/UCr52suELwXnTMQ0DfoK3x9g/" target="_blank"><i class="YoutubeBtn fab fa-youtube" aria-hidden="true"></i></a>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			showSidebar: false,
			showLink: false,
		}
	},
	methods : {
		showNav() {
			if(this.showSidebar) {
				this.showLink = false;
				setTimeout(()=> {
					this.showSidebar = false;
				}, 500)
			} else {
				this.showSidebar = true;
				setTimeout(()=> {
					this.showLink = true;
				}, 500)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	a{
		text-decoration: none;
		color: black;
	}
	.LoginContainer {
		position : fixed;
		top : 16px;
		right : 16px;
		min-height: calc(100vh-20px);
		i {
			font-size: 1.5vw;
			cursor: pointer;
			transition: all .5s ease-in-out;
		}
		z-index: 999;
	}
	.HomeContainer {
		position : fixed;
		bottom : 16px;
		left : 16px;
		min-height: calc(100vh-20px);
		i {
			font-size: 1.5vw;
			cursor: pointer;
			transition: all .5s ease-in-out;
		}
		z-index: 0;
	}
	.LogoContainer {
		position : fixed;
		bottom : 16px;
		right : 16px;
		min-height: calc(100vh-20px);
		i {
			font-size: 1.5vw;
			cursor: pointer;
			transition: all .5s ease-in-out;
		}
		z-index: 999;
	}

	.container {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		min-height: calc(100vh - 20px);
		background-color: rgba($color: white, $alpha: .5);
		border: solid #fff;
		border-width: 0 1px 0 0;
		z-index: 999;
		transition: all .5s ease-in-out;
		.control {
			top:16px;
			left:16px;
			position: fixed;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 16px;
			i {
				font-size: 1.5vw;
				cursor: pointer;
				transition: all .5s ease-in-out;
			}
		}
		&.show {
			width: 12.45vw;
			.control > i {
				transform: rotateZ(-180deg);
			}
			.navigation-icons {
				color: #fff;
			}
		}
		.navigation-icons {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 50px;
			float: left;
			i {
				font-size: 2rem;
				padding: 10px 0;
				cursor: pointer;
				transition: all .5s ease-in-out;
				&:hover {
					color: #fff;
				}
			}
		}
		.navigation-links {
			padding-top: 5.7vw;
			div {
				font-size: 1.3vw;
				padding-left: 2vw;
				margin-bottom: 2.93vw;
				cursor: pointer;
				&:hover {
					ul{
						display: block;
					}
				}
				ul{
					display: none;
					padding-bottom: 0.15vw;
					padding-left: 1.8vw;
					li{
						padding-top: 1.83vw;
					}
				}
				li{
					font-size: 1.3vw;
					list-style: none;
					text-decoration: none;
					color: black;
					&:hover {
						color: rgb(175, 175, 175);
					}
				}
			}
			
		}
	}
	@mixin nav-childs($values...) {
		@each $var in $values {
			&:nth-child(#{$var}) {
				transition: transform linear calc(.1s * #{$var}), display .5s;
			}
		}
	}
	.fade-enter-active, .fade-leave-active {
		@include nav-childs(1,2,3,4,5,6,7);
	}
	.fade-enter, .fade-leave-to {
		transform: scale(0);
	}
</style>