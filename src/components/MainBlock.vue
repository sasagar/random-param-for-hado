<template>
    <button @click="buttonPressed">
      <template v-if="flag">選び直す！</template>
      <template v-else>決めるっ！</template>
    </button>
    <div class="params">
      <ParamBlock paramname='Speed'></ParamBlock>
      <ParamBlock paramname='Scale'></ParamBlock>
      <ParamBlock paramname='Charge'></ParamBlock>
      <ParamBlock paramname='Shield'></ParamBlock>
    </div>
</template>

<script>
import ParamBlock from './ParamBlock.vue';

export default{
  components: { ParamBlock },
  name: 'MainBlock',
  inject: ['fixedFlag', 'buttonPressed'],
  computed: {
  flag() {
            return this.fixedFlag.value;
        }
      }
}
</script>

<style lang="scss" scoped>
button {
  width: 200px;
  height: 50px;
  border-radius: 25px;
  background-color: pink;
  border-color: lightblue;
  font-family: 'Dela Gothic One', cursive;
  font-size: 24px;
}
.params {
  display: flex;
  justify-content: center;
  width: calc(100% - 40px);
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
}
</style>