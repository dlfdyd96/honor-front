<template>
  <div id="app">
    <div class="slideImage">
        <MenuForm></MenuForm>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>

import MenuForm from '@/components/MenuForm'

export default {
  components: {
		MenuForm,
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
