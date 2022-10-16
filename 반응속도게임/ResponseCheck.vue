<template>
    <div>
        <!-- v-bind를 이용해서 데이터를 넣어줄 수 있다. 
            ":"로 축약할 수 있음-->
        <div id="screen" :class="state">{{  }}</div>
        <div>평균 시간: {{  }}</div>
        <button @click="onReset">리셋</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                result: [],
                state: 'waiting',
                message: '클릭해서 시작하세요.',
            }
        },
        methods: {
            onReset() {

            }
        }
    }
</script>

<style>
</style>