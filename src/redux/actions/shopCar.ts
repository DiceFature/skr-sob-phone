import {
    ADD_SHOP_TO_SHOP_CART,
    DEL_SHOP_TO_SHOP_CART,
    GET_SHOP_CAR
} from '../constants';

import {
    getShopCarApi,
    addShopCarApi,
    delShopCarApi
} from 'Api/shopCar';

// 获取购物车列表
export const getShopCarList = (data: any) => {
    return {
        data,
        type: GET_SHOP_CAR
    }
}

// 添加购物车
export const addShopCar = (data: any) => {
    return {
        data,
        type: ADD_SHOP_TO_SHOP_CART,
    }
}

// 删除购物车
export const delShopCar = (data: any) => {
    return {
        data,
        type: DEL_SHOP_TO_SHOP_CART,
    }
}


// payload代表组件使用这个reducer的时候传入的参数
export const getShopCar = (payload: any) => {
    return async (dispatch: any) => {
        const res = await getShopCarApi(payload)
        // 异步请求完后，再触发同步action，更新state到redux
        dispatch(getShopCarList(res));
    };
};

// 添加商品到购物车
export const addShop = (payload: any) => {
    return async (dispatch: any) => {
        const res = await addShopCarApi(payload)
        // 异步请求完后，再触发同步action，更新state到redux
        dispatch(getShopCarList(res));
    };
};

// 删除购物车
export const delShop = (payload:any)=>{
    return async (dispatch:any)=>{
        const res = await delShopCarApi(payload);
        dispatch(delShopCar(res))
    }
}
