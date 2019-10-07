<template>
    <div id="main">
        <img :src= "Items[1].Picture" >
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

<style scoped>
    img{
        width: 70.3vw;
        height: 70.3vh;
    }
</style>