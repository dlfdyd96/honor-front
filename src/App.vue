<template>
  <div id="app">
    <MenuForm2></MenuForm2>
    <router-view></router-view>
  </div>
</template>

<script>import MenuForm2 from '@/components/MenuForm2'

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
  background-image:url('./assets/mainpage.jpeg');
  height:100vh;
}
</style>
