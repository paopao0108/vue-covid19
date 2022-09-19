import echarts from 'echarts';
import nameMap from './countryName.js';

const charts = {
  line: function (id) {
    // 1 获取dom元素，用于防止echrt图表
    const dom = document.getElementById(id);
    // 2 创建echart实例
    const myEchart = echarts.init(dom);
    // 3 配置选项
    const option = {
      // xAxis: {
      //   type: 'category',
      //   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      // },
      // yAxis: {
      //   type: 'value'
      // },
      // series: [
      //   {
      //     data: [820, 932, 901, 934, 1290, 1330, 1320],
      //     type: 'line'
      //   }
      // ]
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Rainfall',
          type: 'line',
          // 此处的数据暂时没有接口调用
          data: [2, 40, 60, 100, 489, 268, 200, 100, 137, 355, 24, 234],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          }
          // markLine: {
          //   data: [{ type: 'average', name: 'Avg' }]
          // }
        }
        // {
        //   name: 'Evaporation',
        //   type: 'bar',
        //   data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        //   markPoint: {
        //     data: [
        //       { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
        //       { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
        //     ]
        //   }
        //   // markLine: {
        //   //   data: [{ type: 'average', name: 'Avg' }]
        //   // }
        // }
      ]
    };
    // 4 为实例配置
    myEchart.setOption(option, true);
  },
  chinaMap: function (id, data) {
    // 1 获取dom元素，用于防止echrt图表
    const dom = document.getElementById(id);
    // 2 创建echart实例
    const myEchart = echarts.init(dom);
    // 3 配置选项
    const option = {
      // 显示提示框
      tooltip: {
        // triggerOn: 'click',
        // enterable: 'true',
        // backgroundColor: 'rgba(0,0,0,0.4)', // 提示标签背景颜色
        // textStyle: { color: '#fff' }, // 提示标签字体颜色
        formatter(data) {
          // console.log(data);
          // console.log('value', data.value);
          return "<a href='/#/city/" + data.name + "' style='color:#fff'><div><p>" + data.name + '</p><p>现存确诊:' + data.value + '</p></div></a>';
        }
      },
      visualMap: [
        {
          // 映射-颜色值
          orient: 'vertical', // 分段方向:horizontal水平
          type: 'piecewise', // 分段
          pieces: [
            // 配置颜色区间
            { min: 0, max: 0, color: '#FFFFFF' },
            { min: 1, max: 9, color: 'rgb(255, 229, 219)' },
            { min: 10, max: 99, color: 'rgb(255, 153, 133)' },
            { min: 100, max: 999, color: 'rgb(245, 117, 103)' },
            { min: 1000, max: 9999, color: 'rgb(230, 69, 70)' },
            { min: 10000, max: 1000000, color: '#4F070D' }
          ]
        }
      ],
      series: [
        {
          name: '省',
          type: 'map',
          map: 'china',
          roam: false,
          zoom: 1.2,
          aspectScale: 0.75,
          label: {
            // 配置地图上的字体
            normal: {
              show: true, // 是否要显示省份
              textStyle: {
                color: 'rgba(0,0,0,0.4)'
              }
            }
          },
          itemStyle: {
            // 配置地图的样式
            normal: {
              areaColor: 'rgba(255,255,255,0.1)',
              borderColor: 'rgba(0,0,0,.3)'
            },
            emphasis: {
              // 选中的区域颜色及阴影效果等
              areaColor: 'rgba(118,237,236,0.8)',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          // data: [
          //   { name: '黑龙江', value: 20, itemStyle: { normal: { areaColor: '#f00' } } },
          //   { name: '内蒙古', value: 20, itemStyle: { normal: { areaColor: '#f00' } } }
          // ]
          // data: [
          //   { name: '黑龙江', value: 20 },
          //   { name: '内蒙古', value: 1100 }
          // ]
          data: data
        }
      ]
    };
    // 4 为实例配置
    myEchart.setOption(option, true);
  },
  worldMap: function (id, data) {
    const myEcharts = echarts.init(document.getElementById(id));
    const option = {
      tooltip: {
        formatter(data) {
          return '<div><p>' + data.name + '</p><p>现存确诊:' + data.value + '</p></div>';
        }
      },
      visualMap: [
        {
          // 映射-颜色值
          orient: 'vertical', // 分段方向:horizontal水平
          type: 'piecewise', // 分段
          pieces: [
            // 配置颜色区间
            { min: 0, max: 0, color: '#FFFFFF' },
            { min: 1, max: 1000, color: '#FDFDCF' },
            { min: 1000, max: 10000, color: '#FE9E83' },
            { min: 10000, max: 500000, color: '#E55A4E' },
            { min: 500000, max: 10000000000, color: '#4F070D' }
          ]
        }
      ],
      series: [
        {
          name: '世界地图',
          type: 'map', // 配置图表类型
          map: 'world', // 中国地图
          roam: true, // 是否允许自动缩放
          zoom: 1.2, // 地图缩放比例
          label: {
            // 配置字体
            normal: {
              show: false, // 控制地图显示名字
              textStyle: {
                fontSize: 8
              }
            }
          },
          nameMap: nameMap,
          itemStyle: {
            // 配置地图样式
            normal: {
              areaColor: 'rgba(0,255,236,0)',
              borderColor: 'rgba(0,0,0,0.2)'
            },
            emphasis: {
              // 选中的区域颜色及阴影效果等
              areaColor: 'rgba(255,180,0,0.8)',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0
            }
          },
          data: data
        }
      ]
    };
    myEcharts.setOption(option);
  }
};

export default charts;
