import {
    ADD_SHOP_TO_SHOP_CART,
    GET_SHOP_CAR
} from "../constants";

import { IAction } from '../type';

export default function shopcarReducer(state = [], action: IAction) {
    switch (action.type) {
        case ADD_SHOP_TO_SHOP_CART: // 添加商品
        
            return [action.data];

        case ADD_SHOP_TO_SHOP_CART: // 删除商品

            return [action.data];

        case GET_SHOP_CAR: // 获取购物车列表

            return [action.data];

        default:
            return state;
    }
}
