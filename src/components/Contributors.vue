<template>
    <div class='contributor_background'>
        <div class="Container" >
            <div  v-for="contributor in this.getContributors" :key="contributor.index" >
                <div id="season">{{contributor.season}}</div>
                <div id = "namesContainer">
                    <div id="names" v-for="(people, index) in contributor.peoples" :key="index">
                        {{ people.Name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    created : function() {
        this.getContributorsServer()
    },
    computed : {
        ...mapGetters({
            getContributors:'getContributors'
        }),
    },
    methods: {
        ...mapActions({
            getContributorsServer: 'getContributorsServer'
        })
    }

}
</script>


<style scoped>
.Container {
    position : fixed;
    width: 100%;
    margin-top : 6rem;
    margin-left : 6rem;
}
.contributor_background {
    background-color: rgb(233, 236, 241);
    height: 100%;
    width : 100%;
}
.namesContainer{

}
#names {
    width : 80px;display: inline-block;
}
#season{
    font-size: 30px;
    margin-top: 20px;
}

</style>
<!--<style lang="scss" scoped>
table{
    position: relative;
    margin: auto;
    width: 60vw;
    top: 16vh;
}

#season{
    font-size: 2.2vw;
    padding-bottom: 3.3vw;
}

#names{
    font-size: 1.61vw;
    padding-bottom: 7vw;
}

#main{
    min-height: 100vh;
    height: calc(100vh-89px);
    background-color: rgb(233, 236, 241);
}
</style>

<!-- 세로 1366px, 세로 768px -->