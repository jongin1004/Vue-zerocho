<template>
    <div>
        <h1>{{ result }}</h1>
        <!-- v-on:을 @으로 대신할 수 있음 -->
        <!-- @submit.prevent로 적어줌으로써 preventDefault를 생략가능 -->
        <form @submit.prevent="onSubmitForm">
            <input type="text" ref="answer" v-model="value" minlength=4 maxlength=4>
            <button>입력</button>
        </form>

        <div>시도: {{ tries.length }}</div> 

        <ul>
            <li v-for="t in tries">
                <div>{{ t.try }}</div>
                <div>{{ t.result }}</div>
            </li>
        </ul>        
    </div>
</template>

<script>
    const getRandomNums = () => {

        const candidates = Array(9).fill(0).map((num, i) => i + 1);
        const array      = [];

        for (let i = 0; i < 4; i++) {
            
            const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            // array.push(chosen);
            array[i] = chosen;
        }

        return array;
    }

    export default {
        data() {
            return {
                answers: getRandomNums(),                
                tries: [],
                value: '',
                result: '',
            }
        },
        methods: {
            onSubmitForm() {                
                                
                let strike = 0;
                let ball   = 0;
                this.answers.forEach((num, i) => {

                    console.log(num);
                    if (num === parseInt(this.value[i])) {

                        strike ++;
                    } else if (this.answers.includes(parseInt(this.value[i]))) {

                        ball ++;
                    }
                });

                if (strike === 4) {

                    this.tries.push({
                        try: this.value,
                        result: '홈런',
                    });

                    alert("홈런!!");
                    this.tries = [];
                    this.answers = getRandomNums();

                } else {

                    this.tries.push({
                        try: this.value,
                        result: `${strike}스트라이크 ${ball}볼`,
                    });

                    if (this.tries.length > 9) {
                        alert(`10번의 기회를 다 사용!! 실패!!\n 정답 ${this.answers.join('')}`);
                        this.tries = [];
                        this.answers = getRandomNums();
                    }
                }
                
                this.value = '';
                this.$refs.answer.focus();                
            }
        }
    }
</script>

<style>
    
</style>