<template>
  <div id="app">
    <!--  v-bind:style="{'background-image':'url(' + '주소' + ')'}"  -->
    <MenuForm2></MenuForm2>
    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import MenuForm2 from '@/components/MenuForm2'

export default {
  components: {
    MenuForm2,
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800');

*{
  margin: 0px;
  padding: 0px;
}

/* #app {
  font-family: 'Nanum Gothic', Arial, Helvetica, sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  color: #322F42;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image:url("http://202.31.202.253:5000/assets/image/2019_fall_mainpage2.jpg");
  height:100vh;
} */

#app{
  /* 글꼴 */
  font-family: 'Nanum Gothic', Arial, Helvetica, sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  color: #322F42;
  /* 배경 */
  min-height: 100vh;
  height: calc(100vh-89px);
  background-color: rgb(233, 236, 241);
}


button{
  border: none;
}
.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
#team{
  position: fixed;
  padding-top: 50px;
  padding-left: 96vw;
  font-size: 50px;
}
</style>