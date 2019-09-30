<template>
  <div id="app">
    <!--  v-bind:style="{'background-image':'url(' + '주소' + ')'}"  -->
    <MenuForm2></MenuForm2>
    <router-view></router-view>
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

#app {
  font-family: 'Nanum Gothic', Arial, Helvetica, sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  color: #322F42;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image:url("http://202.31.202.253:5000/assets/image/2019_fall_mainpage2.jpg");
  height:100vh;
}
</style>
