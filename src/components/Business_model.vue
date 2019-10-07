<template>
    <div class='main'>
        <div class="image" >
            <img src="../assets/bm.png">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    @media(min-width: 601px){
        .main{
            display: table;
            height: 100vh;
            margin: auto;
        }
        .image{
            display: table-cell;
            vertical-align: middle; 
        }
        img {
            width:60vw;
            height: auto;
        }  
    }
    @media(max-width:600px){
        .main{
            display: table;
            margin: auto;
            height: 100vh;
        }
        .image{
            display: table-cell;
            vertical-align: middle;
        }
        img {
            width:90vw;
            height: auto;
        }  
    }

</style>