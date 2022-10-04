import instance from './request';

// 演示 
// 传参为用户id
// 获取收货地址
export const getUserAddress = (params:any)=>instance.post('/user/getAddress',{...params});

// 新增收获地址
export const addAddressApi=(params:any)=>instance.post('/user/addAddress',{...params});

// 删除收货地址
export const delAddressApi=(params:any)=>instance.post('/user/deleteAddress',{...params});