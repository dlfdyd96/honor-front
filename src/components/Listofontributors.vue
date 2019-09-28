<template>
    <div id='main'>
        <table v-for="item in object" :key="item.names">
            <tr>
                <td id="season">{{item.season}}</td>
            </tr>
            <tr>
                <td id="names">{{item.names}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                object: [
                    {season:'2019 Fall 기부자', names: 'OOO OOO'},
                    {season:'2019 Spring 기부자', names:'신호균, 이용환, 김진한, 김귀곤, 구정호, 김선아, 이희란, 김상민, 김은희, 김문정, 정현욱, 김동혁, 조유근, 이승현, 오현숙, 김지희, 최혜정, 김효진'},
                    {season:'2018 Fall 기부자', names:'조진형, 이지수, 김경모, 차우창, 이종환, 김선아, 구정호, 조성주, 권기연, 김혜경'},
                ]
            }
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