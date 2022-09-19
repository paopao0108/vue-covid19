<template>
  <div class="map">
    <div id="line"></div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Map',
  setup() {
    // this.$charts.line('line');
    // console.log(this);
    // const { prox } = getCurrentInstance(); // 使用proxy代替ctx，因为ctx只在开发环境有效
    const { proxy } = getCurrentInstance(); // 获取上下文实例，ctx=vue2的this
    onMounted(() => {
      console.log(proxy, 'proxy');
      proxy.http();
      proxy.charts.line('line');
    });
  }
};
</script>

<style scoped>
#line {
  width: 400px;
  height: 400px;
}
</style>
