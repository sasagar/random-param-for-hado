<template>
  <TitleBlock></TitleBlock>
  <MainBlock></MainBlock>
</template>

<script>
import {reactive, ref} from 'vue';

import TitleBlock from './components/TitleBlock.vue'
import MainBlock from './components/MainBlock.vue'

const fixedFlag = ref(false);
const randomArray = reactive([]);
const randomParam = reactive([]);

export default {
  name: 'App',
  components: {
    TitleBlock,
    MainBlock
  },
  data() {
    return {
      // fixedFlag: ref(false)
    }
  },
  provide() {
    return {
      fixedFlag,
      buttonPressed: this.buttonPressed,
      randomParam
    }
  },
  methods: {
    buttonPressed() {
      if (fixedFlag.value) {
        fixedFlag.value = false;
      } else {
        this.arrayResetter();
        this.getSixParams();
        this.paramResetter();
        this.paramCounter();
        fixedFlag.value = true;
      }
    },
    randomizer() {
      return Math.floor(Math.random() * 4);
    },
    arrayResetter() {
      randomArray.splice(0);
    },
    getSixParams() {
      let n = 0;
      while (n < 6) {
        const rand = this.randomizer();
        randomArray.push(rand);
        n++;
      }
    },
    paramResetter() {
      randomParam.splice(0);
    },
    paramCounter() {
      let speed = 1;
      let scale = 1;
      let charge = 1;
      let shield = 1;

      speed = speed + randomArray.filter(n => n === 0).length;
      scale = scale + randomArray.filter(n => n === 1).length;
      charge = charge + randomArray.filter(n => n === 2).length;
      shield = shield + randomArray.filter(n => n === 3).length;

      if (speed > 5 || scale > 5 || charge > 5 || shield > 5) {
        this.paramCounter();
      }

      randomParam.push(speed);
      randomParam.push(scale);
      randomParam.push(charge);
      randomParam.push(shield);
    }
  }
}
</script>

<style lang="scss">
body {
  background: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, 'Dela Gothic One', cursive, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
  margin-top: 20px;
}
</style>
