<template>
    <div class='main'>
        <div v-for="(group, index) in getMembers" :key="index">
            <div>{{ group.Season }}</div>
            <div v-for="(people,index) in group.Peoples" :key="index">
                <img :src="people.Image">
                {{ people.Name }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {
             hover: false,
        }
    },
    computed : {
        ...mapGetters(['getMembers']),
    },
    methods:{
        image_hover(){
            this.hover=!this.hover;
        },
        ...mapActions(['getMemberServer']),
    },
    created() {
        this.getMemberServer();
    }
}
</script>

<style scoped>

</style>