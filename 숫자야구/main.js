import { createApp } from 'vue'
import NumberBaseball from './NumberBaseball';

createApp(NumberBaseball, {
  data() {
    return {
      count: 0
    }
  }
}).mount('#root')