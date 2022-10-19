<template>
  <div>
    <!-- 클래스에는 객체형태로 여러 클래스를 적용할 수 있고 TRUE면 적용 false는 비적용 -->
    <!-- 클래스명은 한 단어로 되어진 경우에는 ''를 제외할 수 있음 -->
    <div :class="{'text-red': true, 'active': state}">클래스 바인딩</div>
    <div :class="classArray">클래스 바인딩2</div>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      state: false,
      classArray: ['active', 'text-red']
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
.active {
  background-color: greenyellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
