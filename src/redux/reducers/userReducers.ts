import {
    GET_USER,
    GET_Address,
    ADD_ADDRESS
} from "../constants";

import { IAction } from '../type';
import { DEL_ADDRESS } from '../constants';


export default function userReducer(state = [], action: IAction) {
    switch (action.type) {
        case GET_Address: // 获取收货地址
            return [action.data];
        case ADD_ADDRESS: // 新增收货地址
            return [...state,action.data];
        case DEL_ADDRESS: // 删除指定收货地址
            let newArr = state.filter((ele:any)=>{
                return ele.id !== action.data // 过滤掉要删除的收货地址
            })
            return newArr
        default:
            return state;
    }
}
