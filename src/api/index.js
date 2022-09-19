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
