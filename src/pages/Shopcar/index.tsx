import React, { useState } from 'react';
import { Divider } from 'antd';
import 'antd/dist/antd.css';
import './index.scss';

const ShopCar: React.FC = () => {
  // 全选
  const SelectAll = (e: any) => {
    let ipt = document.querySelectorAll('#input');
    console.log(ipt);
    Array.from(ipt).forEach((item: any, index) => {
      if (item.checked === false) {
        item.checked = true;
      }
      if (e.target.checked === false) {
        item.checked = false;
      }
    });
  };

  let [num, setNum] = useState(1);
  //   商品数量减少
  const reduce = () => {
    if (num <= 1) {
      num = 1;
      setNum(num);
    } else {
      num = num - 1;
      setNum(num);
    }
  };
  //   商品数量增加
  const add = () => {
    num = num + 1;
    setNum(num);
  };
  return (
    <div>
      <div className='shopcar'>
        <h3 className='shopcar-title'>
          <span>我的购物车</span>
          {/* 根据购物车里的数据渲染件数 */}
          <i className='total-num'>共 0 件</i>
        </h3>
        <div className='shopcar-top'>
          <input type='checkbox' name='' id='' onClick={(e) => SelectAll(e)} />
          全选
          <Divider />
        </div>
        <ul className='shopcar-list'>
          {/* 动态添加 li*/}
          <li className='car-shop-item'>
            <div className='checkbox-item'>
              <input type='checkbox' name='' id='input' />
            </div>
            <div className='car-shop-img'>
              <img src='' alt='' />
            </div>
            <div className='car-shop-title'>
              <div className='shop-title-top'>
                <div className='rt'>
                  <h5 className='shop-name'>{'安踏男鞋霸道系列高帮板鞋'}</h5>
                  <p>
                    <span>颜色: {'象牙白/深苔藓绿/灰绿'} ; 尺码: {'XS'} </span>
                  </p>
                </div>
                <div className='gt'>
                    {/* 现价 */}
                  <div className='shop-price'>￥ {419}</div>
                  {/* 折扣价 */}
                  <div className='discounted-price'>￥ {349}</div>
                </div>
              </div>
              <div className='shop-title-bottom'>
                <p className='left'>
                  <span>数量：</span>
                  <a href='#' className='price-reduce' onClick={() => reduce()}>
                    -
                  </a>
                  <input type='text' disabled value={`${num}`} />
                  <a href='#' className='price-add' onClick={() => add()}>
                    +
                  </a>
                </p>
                <p className='right'>
                  {/* 从redux状态中删除 */}
                  <a href='#' className='shop-delete'>
                    删除
                  </a>
                </p>
              </div>
            </div>
          </li>

          
        </ul>
      </div>
      <div className='shop-footer'>
        <span className='total-price'>总价：￥999</span>
        <button className='settlement'>结算</button>
      </div>
    </div>
  );
};
export default ShopCar;