import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/common.css';
import charts from '@/plugins/echarts';
import '../node_modules/echarts/map/js/china';
import '../node_modules/echarts/map/js/world';
import '../node_modules/echarts/map/js/province/anhui';
import '../node_modules/echarts/map/js/province/aomen';
import '../node_modules/echarts/map/js/province/beijing';
import '../node_modules/echarts/map/js/province/chongqing';
import '../node_modules/echarts/map/js/province/fujian';
import '../node_modules/echarts/map/js/province/gansu';
import '../node_modules/echarts/map/js/province/guangdong';
import '../node_modules/echarts/map/js/province/guangxi';
import '../node_modules/echarts/map/js/province/guizhou';
import '../node_modules/echarts/map/js/province/hainan';
import '../node_modules/echarts/map/js/province/hebei';
import '../node_modules/echarts/map/js/province/heilongjiang';
import '../node_modules/echarts/map/js/province/henan';
import '../node_modules/echarts/map/js/province/hubei';
import '../node_modules/echarts/map/js/province/hunan';
import '../node_modules/echarts/map/js/province/jiangsu';
import '../node_modules/echarts/map/js/province/jiangxi';
import '../node_modules/echarts/map/js/province/jilin';
import '../node_modules/echarts/map/js/province/liaoning';
import '../node_modules/echarts/map/js/province/neimenggu';
import '../node_modules/echarts/map/js/province/ningxia';
import '../node_modules/echarts/map/js/province/qinghai';
import '../node_modules/echarts/map/js/province/shandong';
import '../node_modules/echarts/map/js/province/shanghai';
import '../node_modules/echarts/map/js/province/shanxi';
import '../node_modules/echarts/map/js/province/shanxi1';
import '../node_modules/echarts/map/js/province/sichuan';
import '../node_modules/echarts/map/js/province/taiwan';
import '../node_modules/echarts/map/js/province/tianjin';
import '../node_modules/echarts/map/js/province/xianggang';
import '../node_modules/echarts/map/js/province/xinjiang';
import '../node_modules/echarts/map/js/province/xizang';
import '../node_modules/echarts/map/js/province/yunnan';
import '../node_modules/echarts/map/js/province/zhejiang';
// import Tabs from '@/components/home/tabs/tabs.vue';
// import Tab from '@/components/home/tabs/tab.vue';

import ElementUI from 'element-plus';
import '../node_modules/element-plus/theme-chalk/index.css';
const app = createApp(App);
// 测试
// app.config.globalProperties.http = () => {
//   console.log('i am http');
// };
app.config.globalProperties.charts = charts;
// 注册全局组件,注册的组件一定要有name属性
// app.component(Tabs.name, Tabs);
// app.component(Tab.name, Tab);

app.use(store).use(router).use(ElementUI).mount('#app');
