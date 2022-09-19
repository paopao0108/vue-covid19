<template>
  <div class="map">
    <div class="title">
      <i></i>
      疫情地图
    </div>
    <el-tabs style="padding: 0 0.16rem" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="国内疫情" name="second"><div id="China"></div></el-tab-pane>
      <el-tab-pane label="国际疫情" name="third"><div id="world"></div></el-tab-pane>
    </el-tabs>
    <div class="title">
      <i></i>
      数据统计
    </div>
    <div id="line"></div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, ref } from 'vue';
import { getCityInfectNum, getWorldInfectNum } from '@/api';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Map',
  setup() {
    const activeName = ref('second');

    // 格式：{ name: '黑龙江', value: 20, itemStyle: { normal: { areaColor: '#f00' } } }
    const ChinaInfo = [];
    const worldInfo = [];
    const { proxy } = getCurrentInstance(); // 获取上下文实例，ctx=vue2的this,使用proxy代替ctx，因为ctx只在开发环境有效
    const handleClick = (tab, e) => {
      console.log(tab, e);
    };
    onMounted(() => {
      Promise.all([getCityInfectNum(), getWorldInfectNum({ key: 'f4739ab9f8387b2e13815cb1e2eb7c07' })]).then(resList => {
        console.log('resList', resList);
        // 获取并处理国内疫情数据
        const cityRes = resList[0].data.data.diseaseh5Shelf.areaTree[0].children;
        console.log('cityRes', cityRes);
        cityRes.forEach(item => {
          ChinaInfo.push({
            name: item.name,
            value: item.today.confirm
          });
        });
        // 获取并处理国际疫情数据
        const worldRes = resList[1].data.newslist;
        worldRes.forEach(item => {
          worldInfo.push({
            name: item.provinceName,
            value: item.confirmedCount
          });
        });
        console.log('worldRes', worldRes);
        console.log('ChinaInfo', ChinaInfo);
        console.log('worldInfo', worldInfo);

        proxy.charts.chinaMap('China', ChinaInfo);
        proxy.charts.worldMap('world', worldInfo);
        proxy.charts.line('line');
      });
    });
    return { activeName, handleClick };
  }
};
</script>

<style scoped>
#line {
  margin: auto;
  width: 5rem;
  height: 5rem;
}
/* .collectData {
  padding: 10px;
  border-bottom: 1px solid #ccc;
} */
#China {
  margin: auto;
  width: 500px;
  height: 500px;
}
#world {
  margin: auto;
  width: 12rem;
  height: 6rem;
}
.map {
  padding: 0.16rem;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
}
.el-tabs__nav-scroll {
  padding: 0 0.16rem;
}
.title {
  font-size: 0.17rem;
  padding: 10px;
  border-bottom: 1px solid #ccc;
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
