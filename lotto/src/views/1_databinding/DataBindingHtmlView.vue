<template>
  <div>
    <!-- html 태그를 {{}}로 표시하게 되면, 그냥 문자로 출력된다. -->
    <div>{{ htmlString }}</div>
    <!-- v-html를 추가하면 innerHTML형태로 해당 데이터가 들어간다. -->
    <div v-html="htmlString"></div>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      htmlString: '<p style="color:red;">빨강색 문자</p>'
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>
