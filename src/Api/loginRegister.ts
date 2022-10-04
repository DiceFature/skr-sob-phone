import instance from './request';

// 登录请求
export const loginApi = (params:any)=>instance.post('/user/login',{...params});
// 

