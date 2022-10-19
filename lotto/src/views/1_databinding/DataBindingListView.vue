<template>
  <div>
    <div>
      <select v-model="value" id="">
        <option :value="city.code" v-for="city in cities" :key="city.title">{{ city.title }}</option>
      </select>
    </div>

    <div>
      {{ value }}
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '경기', code: '031' },
        { title: '제주', code: '064' }
      ],
      value: ''
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>
