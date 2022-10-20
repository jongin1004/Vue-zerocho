<template>
  <div>
    <div class="ball__container">
      <lotto-ball :key="i" v-for="(num, i) in showNumbers" :number=num></lotto-ball>
    </div>

    <div v-if="bonus">
      <div style="text-align: start; font-size: 24px; font-weight: 600;">보너스</div>
      <lotto-ball :number="bonus"></lotto-ball>
    </div>

    <div v-if="redo">
      <button @click="reset">다시하기</button>
    </div>
  </div>
</template>
<script>
import LottoBall from '../../components/lotto/LottoBall.vue'

function randomNumGenerator () {
  const fullNumber = Array(45).fill().map((num, i) => i + 1)
  const shuffleNum = []

  Array(7).fill().forEach((loop, i) => {
    const randomNum = Math.floor(Math.random() * 45 - i)
    shuffleNum.push(fullNumber.splice(randomNum, 1)[0])
  })

  const bonusNumber = shuffleNum.splice(6, 1)[0]
  const sortedNumber = shuffleNum.sort((a, b) => a - b)

  return [...sortedNumber, bonusNumber]
}

export default {
  components: {
    'lotto-ball': LottoBall
  },
  data () {
    return {
      selectedNumbers: randomNumGenerator(),
      showNumbers: [],
      bonus: '',
      redo: false
    }
  },
  setup () {},
  created () {},
  mounted () {
    this.asyncShowNumber()
  },
  unmounted () {},
  methods: {
    asyncShowNumber () {
      for (let i = 0; i < 6; i += 1) {
        setTimeout(() => {
          this.showNumbers.push(this.selectedNumbers[i])
        }, 500 * i)
      }

      setTimeout(() => {
        this.bonus = this.selectedNumbers[6]
        this.redo = true
      }, 3000)
    },

    reset () {
      this.selectedNumbers = randomNumGenerator()
      this.showNumbers = []
      this.bonus = ''
      this.redo = false

      this.asyncShowNumber()
    }
  }
}
</script>

<style>
  .ball__container {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 12px;
  }
</style>
