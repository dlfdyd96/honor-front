<template>
    <div id='main'>
        <table id="labels">
            <tr>
                <td v-for="label in MenuObj" v-bind:key="label.menu">
                    <li v-on:click="changeMenu(label.menu)">{{ label.name }}</li>
                </td>
            </tr>
        </table>
        <ItemList></ItemList>
    </div>
</template>

<script>
    import ItemList from '@/components/ItemList'
    export default {
        name: 'ProductItem',
        components: {
            ItemList
        },
        data(){
            this.$store.state.MenuMode = "all"
            //console.log(this.$store.state.MenuMode)
            return{
                MenuObj: [ 
                    {name : "전체", menu:"all"},
                    {name : "상의", menu:"top"},
                    {name : "하의", menu:"bottom"},
                    {name : "외투", menu:"coat"},
                    {name : "정장", menu:"suit"},
                    {name : "잡화", menu:"miscellaneous"},
                    {name : "기타", menu:"etc"}
                 ]
            }
        },
        methods:{
            changeMenu: function(keyValue){
                this.$store.state.MenuMode = keyValue
                //console.log(this.$store.state.MenuMode)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #main{
        min-height: 100vh;
        height: calc(100vh-89px);
		background-color: rgb(233, 236, 241);
    }

    #labels{
        position: relative;
        margin: auto;
        font-size: 1.45vw;
        border-spacing: 4.4vw;
        li{
            cursor: pointer;
            font-size: 1.3vw;
            list-style: none;
            text-decoration: none;
            color: black;
            &:hover {
                color: rgb(175, 175, 175);
            }
        }
    }

    
</style>