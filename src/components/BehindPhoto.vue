<template>
    <div id="main">
        <div class="list" v-for="(item,index) in Items" v-bind:key="index">
            <img :src= "item.Picture" >
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                Items : [
                    {Picture:"http://202.31.202.253:5000/assets/image/product/top/male/Sclass/TMS-001.jpg "},
                    {Picture:"http://202.31.202.253:5000/assets/image/product/top/female/Sclass/TFS-001.jpg"},
                    {Picture:"http://202.31.202.253:5000/assets/image/product/coat/male/Sclass/OMS-001.jpg"},
                    {Picture:"http://202.31.202.253:5000/assets/image/product/suit/Sclass/SMS-001.jpg"},
                    {Picture:"http://202.31.202.253:5000/assets/image/product/coat/male/Sclass/OMS-002.jpg"},
                    {Picture:"http://202.31.202.253:5000/assets/image/product/top/female/Bclass/TFB-003.jpg "},
                ],
            }
        }
    }
</script>

<style>
    #main{
        position: relative;
    }
    img{
        padding: 0;
        width: 338px;
        height: 338px;
    }

    .list{
        text-align: center;
        margin-top: 50px;
        margin-right: 55px;
        display: inline-block;
        margin-bottom: 100px;
    }
</style>