import { 
    getUserAddress,
    addAddressApi,
    delAddressApi 
} from 'Api/userAddress';

import {
    GET_Address,
    ADD_ADDRESS,
    DEL_ADDRESS
} from '../constants';

// 获取收货地址
export const getAddressList = (data: any) => {
    return {
        data,
        type: GET_Address
    }
}

// 新增收货地址
export const addAddressList = (data: any) => {
    return {
        data,
        type: ADD_ADDRESS
    }
}

// 删除收货地址
export const delAddressList = (data:any)=>{
    return {
        data,
        type: DEL_ADDRESS
    }
}


// payload代表组件使用这个reducer的时候传入的参数
export const getAddress = (payload: any) => {
    return async (dispatch: any) => {
        const res = await getUserAddress(payload)
        // 异步请求完后，再触发同步action，更新state到redux
        dispatch(getAddressList(res));
    };
};

// 新增收获地址
export const addAddress =(payload: any)=>{
    return async (dispatch:any)=>{
        const res:any = await addAddressApi(payload);
        if (res.code === 401) {
            console.log('入参不符');
        }else if(res.code === 501){
            console.log('服务端错误');
        }else{
            dispatch(addAddressList(payload))
        }
    }
}

// 删除收货地址
export const delAddress = (payload:any)=>{
    return async (dispatch:any)=>{
        const res:any = await delAddressApi(payload);
        if (res.code===200) {
            dispatch(delAddressList(payload))
        }
    }
}