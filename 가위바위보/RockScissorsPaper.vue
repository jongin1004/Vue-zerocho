<template>
    <div>
        <div id="computer" :style="{ backgroundImage: `url(https://picsum.photos/id/237/200/300)` }"></div>
        <div>
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('가위')">가위</button>
            <button @click="onClickButton('보')">보</button>
        </div>
        <div>{{ result }}</div>
        <div>현재 {{ score }}점</div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                result: '',
                score: 0,
            }
        },
        methods: {
            onClickButton(choice) {

                console.log(choice);
            }
        }
    }
</script>

<style>
</style>