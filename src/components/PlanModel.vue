<template>
    <div id='main'>
        <br><br><br><br><br>
        <section id='intro'>
            <p class="mainText" style="color: rgb(200, 170, 60)">명예옷장</p><p class="mainText">은,</p>
            <br><br><br>
            <p>지식과 경험을 바탕으로 후학을 양성하는 스승이</p>
            <p>추억과 이야기가 담겨 있어 절대 버릴 수 없었던 좋은 옷을 기부하고,</p>
            <br>
            <p>밝은 미래를 꿈꾸며 열심히 노력하는 제자가</p>
            <p>좋은 옷을 저렴하게 구입할 뿐만 아니라 의미 있는 이야기를 함께 구매</p>
            <p>함으로써,</p>
            <br>
            <p>스승과 제자간의 명예로운 가치를 나누는 사외적 협동 프로젝트입니다.</p>
        </section>
        <br><br><br><br><br><br><br><br><br>
        <section>
            <p class="subText">묵혀둔 자원의 활용,</p>
            <br>
            <p>잘 사용하였지만, 지금은 필요 없는 잉여 물품을 묵혀두지 말고 필요한 사람에게 제공</p>
            <br><br><br>
            <p class="subText">스승과 제자의 교류</p>
            <br>
            <p>지식뿐만 아니라 마음을 헤아려 가치를 나눌 수 있는 훈훈한 기회</p>
            <br><br><br>
            <p class="subText">의미의 시대,</p>
            <br>
            <p>유형의 교류를 통해 무형의 가치를 함께 하는 의미의 시대를 공감</p>
            <br>
        </section>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .mainText{
        display: inline;
        font-size: 3vw;
    }

    .subText{
        font-size: 2.5vw;
    }

    p{
        font-size: 1.5vw;
    }

    section{
        position: relative;
        left: 20%;
        width: 60%;
        text-align: left;
    }

    #main{
        min-height: 100vh;
        height: calc(100vh-89px);
		background-color: rgb(233, 236, 241);
    }

    #intro{
        text-align: center;
    }
</style>