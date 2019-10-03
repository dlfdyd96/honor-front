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
    height: 100vh;
    width : 100vw;
    margin: auto;
}
.namesContainer{
}
.wrap{
    margin-bottom: 13vh;
}
#names {
    display: inline-block;
    font-size: 2.86vh;
}
#season{
    font: bold;
    font-size: 2.2vw;
    margin-bottom: 6.2vh;
}

</style>