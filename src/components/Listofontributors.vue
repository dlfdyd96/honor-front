<template>
    <div id='main'>
        <table v-for="contributor in this.getContributors" :key="contributor.names">
            <tr>
                <td id="season">{{contributor.season}}</td>
            </tr>
            <tr>
                <td id="names">{{contributor.names}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed : {
        ...mapGetters({
            getContributors:'getContributors'
        })
    }
}
</script>

<style lang="scss" scoped>
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