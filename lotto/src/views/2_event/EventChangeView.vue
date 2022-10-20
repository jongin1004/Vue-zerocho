<template>
  <div>
    <select @change="changeDongList($event)" v-model="cityValue">
      <option value="">==도시선택==</option>
      <option :value="city.cityCode" :key="city.cityCode" v-for="city in cityList" >{{ city.title }}</option>
    </select>

    <br />

    <h3>Chage 이벤트로 함수를 통해 해결</h3>
    <select v-model="dongValue">
      <option :value="dong.code" :key="i" v-for="(dong, i) in dongListByCity">{{ dong.dongTitle }}</option>
    </select>

    <br />

    <h3>Compute이용해서 해결하기</h3>
    <select v-model="dongValue">
      <option :value="dong.code" :key="i" v-for="(dong, i) in filterDongListByCityCode">{{ dong.dongTitle }}</option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      cityList: [
        { cityCode: '02', title: '서울' },
        { cityCode: '031', title: '경기' },
        { cityCode: '064', title: '제주' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '서울 1동' },
        { cityCode: '02', dongCode: '2', dongTitle: '서울 2동' },
        { cityCode: '02', dongCode: '3', dongTitle: '서울 3동' },
        { cityCode: '031', dongCode: '1', dongTitle: '경기 1동' },
        { cityCode: '031', dongCode: '2', dongTitle: '경기 2동' },
        { cityCode: '031', dongCode: '3', dongTitle: '경기 3동' },
        { cityCode: '064', dongCode: '1', dongTitle: '제주 1동' },
        { cityCode: '064', dongCode: '2', dongTitle: '제주 2동' },
        { cityCode: '064', dongCode: '3', dongTitle: '제주 3동' },
        { cityCode: '064', dongCode: '4', dongTitle: '제주 4동' }
      ],
      dongListByCity: [],
      cityValue: '',
      dongValue: ''
    }
  },
  computed: {
    filterDongListByCityCode () {
      return this.dongList.filter(dong => dong.cityCode === this.cityValue)
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    changeDongList (e) {
      console.log(e)
      this.dongListByCity = this.dongList.filter(dong => dong.cityCode === this.cityValue)
    }
  }
}
</script>
