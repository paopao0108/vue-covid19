import echarts from 'echarts';

// const install = function (Vue) {
//   Object.defineProperties(Vue.prototype, {
//     $charts: {
//       // eslint-disable-next-line space-before-function-paren
//       get() {
//         return {
//           line: function (id) {
//             // 1 获取dom元素，用于防止echrt图表
//             const dom = document.getElementById(id);
//             // 2 创建echart实例
//             const myEchart = echarts.init(dom);
//             // 3 配置选项
//             const option = {
//               xAxis: {
//                 type: 'category',
//                 data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//               },
//               yAxis: {
//                 type: 'value'
//               },
//               series: [
//                 {
//                   data: [820, 932, 901, 934, 1290, 1330, 1320],
//                   type: 'line'
//                 }
//               ]
//             };
//             // 4 为实例配置
//             myEchart.setOption(option, true);
//           },
//           chinaMap: function (id) {
//             // 1 获取dom元素，用于防止echrt图表
//             const dom = document.getElementById(id);
//             // 2 创建echart实例
//             const myEchart = echarts.init(dom);
//             // 3 配置选项
//             const option = {};
//             // 4 为实例配置
//             myEchart.setOption(option, true);
//           }
//         };
//       }
//     }
//   });
// };

const charts = {
  line: function (id) {
    // 1 获取dom元素，用于防止echrt图表
    const dom = document.getElementById(id);
    // 2 创建echart实例
    const myEchart = echarts.init(dom);
    // 3 配置选项
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }
      ]
    };
    // 4 为实例配置
    myEchart.setOption(option, true);
  },
  chinaMap: function (id) {
    // 1 获取dom元素，用于防止echrt图表
    const dom = document.getElementById(id);
    // 2 创建echart实例
    const myEchart = echarts.init(dom);
    // 3 配置选项
    const option = {};
    // 4 为实例配置
    myEchart.setOption(option, true);
  }
};

export default charts;
