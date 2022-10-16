import { createApp } from 'vue'
import RockScissorsPaper from './RockScissorsPaper';

createApp(RockScissorsPaper, {
  data() {
    return {
      count: 0
    }
  }
}).mount('#root')