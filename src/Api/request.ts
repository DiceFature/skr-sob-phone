import axios from 'axios';

let axiosOption = {
    baseURL:"http://xxx.xxx.xxx.xxx:8080",
    timeout:3000
}
// 创建一个单例
const instance = axios.create(axiosOption);
// 添加请求拦截器
instance.interceptors.request.use(function (config) {

  // 可以在此注入token
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log(response.data);
  return response.data;


}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance;

