<template>
  <!-- 一级路由入口 -->
  <div class="home">
    <Header />
    <InfectInfo />
    <InfectNum />
    <Map />
  </div>
</template>

<script>
import Header from '@/components/home/header.vue';
import InfectInfo from '@/components/home/infectInfo.vue';
import InfectNum from '@/components/home/infectNum.vue';
import Map from '@/components/home/map.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: { Header, InfectInfo, InfectNum, Map },
  setup() {}
};
</script>

<style scoped></style>
