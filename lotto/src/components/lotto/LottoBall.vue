<template>
    <div :class="['ball', `${ballColor}`]">{{ number }}</div>
</template>
<script>
export default {
  components: {},
  props: ['number'],
  data () {
    return {
      ballColor: ''
    }
  },
  setup () {},
  created () {},
  mounted () {
    this.checkColor()
  },
  unmounted () {},
  methods: {
    checkColor () {
      // let color

      if (this.number < 10) {
        this.ballColor = 'white'
      } else if (this.number < 20) {
        this.ballColor = 'red'
      } else if (this.number < 30) {
        this.ballColor = 'yellow'
      } else if (this.number < 40) {
        this.ballColor = 'green'
      } else {
        this.ballColor = 'blue'
      }
    }
  }
}
</script>

<style scoped>
  .ball {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    font-weight: 600;

    background-color: red;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid black;
  }

  .ball.white {
    color: black;
    background-color: white;
  }
  .ball.red {
    color: white;
    background-color: red;
  }
  .ball.yellow {
    color: black;
    background-color: yellow;
  }
  .ball.green {
    color: white;
    background-color: green;
  }
  .ball.blue {
    color: white;
    background-color: blue;
  }
</style>
