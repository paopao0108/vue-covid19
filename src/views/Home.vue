<template>
  <!-- 一级路由入口 -->
  <div class="home">
    <Header />
    <InfectInfo />
    <InfectNum />
    <Map />
    <CollecData />
  </div>
</template>

<script>
import { ref } from 'vue';
import Header from '@/components/home/header.vue';
import InfectInfo from '@/components/home/infectInfo.vue';
import InfectNum from '@/components/home/infectNum.vue';
import Map from '@/components/home/map.vue';
// import CollecData from '@/components/home/collecData.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: { Header, InfectInfo, InfectNum, Map },
  setup() {
    const currIndex = ref('');

    return { currIndex };
  }
};
</script>

<style scoped></style>
