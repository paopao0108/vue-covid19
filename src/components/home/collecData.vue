<template>
  <div class="collectData">
    <div class="title">
      <i></i>
      数据统计
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue';

export default {
  name: 'CollectData',
  setup() {
    onMounted(() => {
      const { proxy } = getCurrentInstance();
      proxy.charts.line('line');
    });
  }
};
</script>

<style scoped>
#line {
  margin: auto;
  width: 5rem;
  height: 5rem;
}
.title {
  font-size: 0.17rem;
}

.title i {
  display: inline-block;
  width: 0.04rem;
  height: 0.16rem;
  margin-right: 0.03rem;
  vertical-align: middle;
  background: #4169e2;
}
</style>
