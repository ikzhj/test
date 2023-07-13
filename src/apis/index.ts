import req from '../utils/request'

/**
 * 测试接口
 */

// 测试用Hello World
export const TestApi = () => req({ url: '/api/test', method: 'get' })
export const GetRoutes = () => req({ url: '/api/getRoutes', method: 'get' })
