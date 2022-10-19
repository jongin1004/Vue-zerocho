<template>
  <div>
    <div :style="style1">style 바인딩: 글씨는 red, 폰트크기: 30px</div>
    <div :style="style2">style 바인딩: 글씨는 blue, 폰트크기: 45px</div>

    <button @click="style1.color = 'black'">색변경</button>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      style1: {
        color: 'red',
        fontSize: '30px'
      },
      style2: {
        color: 'blue',
        fontSize: '45px'
      }
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>

<style>

</style>
