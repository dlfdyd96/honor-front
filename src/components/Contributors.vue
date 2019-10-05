<template>
    <div class='contributor_background'>
        <div class="Container" >
            <div class="wrap" v-for="contributor in this.getContributors" :key="contributor.index" >
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
    width: 100%;
    margin: auto;
    padding-top: 18.9vh;
    padding-left: 20%
}
.contributor_background {
    min-height: 100vh;
    height: calc(100vh-89px);
    width : 100vw;
    margin: auto;
}
.namesContainer{
}
.wrap{
    padding-bottom: 13vh;
}
#names {
    display: inline-block;
    font-size: 2.86vh;
}
#season{
    font-size: 2.2vw;
    font-weight: bold;
    padding-bottom: 6.2vh;
}

</style>