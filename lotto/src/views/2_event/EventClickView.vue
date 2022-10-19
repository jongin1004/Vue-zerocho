<template>
  <div>
    <button @click="increaseCounter">Add 1</button>
    <div>{{ counter }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      counter: 0
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    increaseCounter () {
      this.counter += 1
    }
  }
}
</script>
