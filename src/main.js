import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/common.css';
import charts from '@/plugins/echarts';
import '../node_modules/echarts/map/js/china';

const app = createApp(App);
// 测试
// app.config.globalProperties.http = () => {
//   console.log('i am http');
// };
app.config.globalProperties.charts = charts;

app.use(store).use(router).mount('#app');
