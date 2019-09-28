<template>
	<div id="Main">
		<PlanModel/>
		<Listofontributors/>
		<Spring2019/>
	</div>
</template>

<script>
import PlanModel from '@/components/PlanModel'
import Listofontributors from '@/components/Listofontributors'
import Spring2019 from '@/components/2019Spring'

export default {
	name: 'Main',
	components:{
		PlanModel,
		Listofontributors,
		Spring2019,
	},
	computed:{
		param: function(){
			return this.$route.params;
		}
	}
}
</script>

<style>
	
</style>
