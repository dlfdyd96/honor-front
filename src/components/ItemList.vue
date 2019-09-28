<template>
    <div>
        <table>
            <tr>
                <td class="img">{{ itemState }}</td>
                <td class="img">{{ itemState }}</td>
                <td class="img">{{ itemState }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'ItemList',
        data(){
            if(this.$store.state.MenuMode == "all"){
                return {
                    itemState : "1"
                }
            }
            else{
                return {
                    itemState : "2"
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .img{
        padding: 0;
        width: 24.7vw;
        height: 24.7vw;
        text-align: center;
        background-color: yellow;
    }
    
    table{
       position: relative;
       top: 2.8vh;
       margin: auto;
       border-spacing: 3.97vw;
       td{
           padding-right: 4.05vw;
       }
    }


</style>