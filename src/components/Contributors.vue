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
@media(min-width:601px){
    .Container {
        margin: auto;
        padding-right: 15%;
        padding-top: 6vw;
        padding-left: 15%
    }
    .contributor_background {
        min-height: 100vh;
        height: calc(100vh-89px);
        width : 100vw;
        margin: auto;
    }
    .wrap{
        padding-bottom: 13vh;
    }
    #names {
        display: inline-block;
        font-size: 1.6vw;
    }
    #season{
        font-size: 2.2vw;
        font-weight: bold;
        padding-bottom: 6.2vh;
    }
    #names{
        padding-bottom: 10px;
        padding-right: 10px;
    }
}
@media(max-width: 600px){
    .Container {
        padding-top: 15vw;
        padding-left: 8%;
        padding-right: 8%;
    }
    .contributor_background {
        min-height: 100vh;
        height: calc(100vh-89px);
    }
    .wrap{
        padding-bottom: 13vh;
    }
    #names {
        display: inline;
        font-size: 5.5vw;
    }
    #season{
        font-size: 7vw;
        font-weight: bold;
        padding-bottom: 6.2vh;
    }
    #names{
        padding-bottom: 5px;
        padding-right: 3px;
    }
}
</style>