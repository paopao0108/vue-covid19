/**
 * @description: 定义请求接口
 * @return {*}
 */
import request from '@/utils/request.js';

/**
 * @description: 获取疫情数据
 * @param {*} params
 * @return {*}
 */
export const getNcov = params => {
  return request('http://api.tianapi.com/ncov/index', 'get', params);
};

/**
 * @description: 获取各省疫情数据
 * @return {*}
 */
export const getCityInfectNum = () => {
  return request('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=diseaseh5Shelf', 'get');
};

/**
 * @description: 获取世界地区疫情数据
 * @param {*} params
 * @return {*}
 */
export const getWorldInfectNum = params => {
  return request('http://api.tianapi.com/ncovabroad/index', 'get', params);
};
