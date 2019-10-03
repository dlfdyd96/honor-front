<template>
    <div id='main'>
        <table id="labels">
            <tr>
                <td class="inactive" v-for="(label, index) in MenuObj" v-bind:key="index">
                    <li 
                    @click="changeProductMenu( { keyValue : label.Specification })" 
                    @mouseover="MenuObj[index].ishover= true"
                    @mouseleave="MenuObj[index].ishover= false"
                    :class="{ hoveractive: MenuObj[index].ishover }">{{ label.name }}</li><!-- 클릭시 색깔변경 추가 -->
                </td>
            </tr>
        </table>
        <ItemList></ItemList>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import ItemList from '@/components/ItemList'
import DetailItem from '@/components/DetailItem'

export default {
    name: 'ProductItem',
    components: {
        ItemList,
        DetailItem
    },
    data(){
        //this.$store.state.productMenu = "all"
        //console.log(this.$store.state.MenuMode)
        return{
            MenuObj: [ 
                {name : "전체", menu:"all", Specification:"A", ishover:false},  //menu 속성 제거?
                {name : "상의", menu:"top", Specification:"T", ishover:false},
                {name : "하의", menu:"bottom", Specification:"B", ishover:false},
                {name : "외투", menu:"coat", Specification:"O", ishover:false},
                {name : "정장", menu:"suit", Specification:"S", ishover:false},
                {name : "잡화", menu:"miscellaneous", Specification:"G", ishover:false},
                {name : "기타", menu:"etc", Specification:"E", ishover:false}
            ]
        }
    },
    methods:{
        ...mapMutations(['changeProductMenu']),

    },
    created(){
        
    }
}
</script>

<style scoped>
    
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
    }
    .inactive{
        cursor: pointer;
        font-size: 1.3vw;
        list-style: none;
        text-decoration: none;
        color: black;
    }
    .hoveractive{
        cursor: pointer;
        font-size: 1.3vw;
        list-style: none;
        text-decoration: none;
        color: rgb(175, 175, 175);
    }
    
</style>