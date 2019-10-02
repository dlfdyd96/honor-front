<template>
	<div id="main" :style=" { 'background-image': 'url(' + this.getRandomBackground + ')' } " >
	</div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
	name: 'Main2',
	created() {
		this.setBackground();
	},
    computed : {
        ...mapGetters(['getRandomBackground'])
	},
	methods: {
		...mapMutations(['setBackground'])
	}
}
</script>

<style scoped>
	#main {
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height:100vh;
	}
</style>
