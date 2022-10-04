import React, { Fragment, useEffect, useRef } from 'react'
import { Select, InputNumber, message } from 'antd'
import { NavLink, Outlet } from 'react-router-dom'
import 'antd/dist/antd.css';
const { Option } = Select;

interface obj {
    size: string | null,
    quantity: number | null, 
    spu_id: string | null,
    id: string | null,
    style: string | null
}

function Magnifier({ data, imges }: any) {
    let objdata: obj = {
        size: 'L',
        quantity: 1,
        spu_id: null,
        id: null,
        style: null
    }
    //放大镜
    const imgbox = useRef(null)
    const magnifier = useRef(null)
    const hideBox = useRef(null)
    const bigImg = useRef(null)
    const delitbox = useRef(null)
    useEffect(() => {
        let deiltFF: any = delitbox.current
        let box1F: any = imgbox.current
        let box1S: any = magnifier.current
        let hidF: any = hideBox.current
        let hidS: any = bigImg.current
        // console.log(deiltFF, box1F, box1S, hidF, hidS);
        if (deiltFF) {
            box1F.addEventListener('mousemove', function (e: any) {
                var x = e.pageX - deiltFF.offsetLeft
                var y = e.pageY - deiltFF.offsetTop

                let Xmax = box1F.offsetWidth - box1S.offsetWidth;
                let Ymax = box1F.offsetHeight - box1S.offsetHeight;

                var makX = x - box1S.offsetWidth / 2;
                var makY = y - box1S.offsetHeight / 2;

                makX = makX < 0 ? 0 : makX;
                makX = makX > Xmax ? Xmax : makX;
                makY = makY < 0 ? 0 : makY;
                makY = makY > Ymax ? Ymax : makY;

                box1S.style.top = makY + 'px';
                box1S.style.left = makX + 'px';

                var imgXMax = hidS.offsetWidth - hidF.offsetWidth
                var imgYMax = hidS.offsetHeight - hidF.offsetHeight

                hidS.style.marginLeft = -makX * imgXMax / Xmax + 'px'
                hidS.style.marginTop = -makY * imgYMax / Ymax + 'px'

            })
            box1F.addEventListener('mouseover', function () {
                box1S.style.display = 'block';
                hidF.style.display = 'block'
            })
            box1F.addEventListener('mouseout', function () {
                box1S.style.display = 'none';
                hidF.style.display = 'none'
            })
        }
    }, [data])

    //换图
    const asideul = useRef(null)
    const shopimg1 = useRef(null)
    const choiceimg = useRef(null)
    useEffect(() => {
        let ulbox1: any = asideul.current
        let ulbox2: any = choiceimg.current
        let imgsmall: any = shopimg1.current
        let imgbig: any = bigImg.current
        let lastTime: any;
        if (ulbox1) {
            ulbox1.addEventListener('click', function (e: any) {
                var target = e.target
                console.log(target);
                if (target.nodeName === 'IMG') {
                    console.log(target);
                    imgsmall.src = target.src
                    imgbig.src = target.src
                }
            })
        }
        if (ulbox2) {
            ulbox2.addEventListener('click', function (e: any) {
                var target = e.target
                if (target.nodeName === 'IMG') {
                    if (lastTime) {
                        lastTime.style.display = ''
                        lastTime.style.border = ''
                    }
                    target.style.display = 'inline-block'
                    target.style.border = '1px solid #000'
                    imgsmall.src = target.src
                    imgbig.src = target.src
                    lastTime = target
                }
            })
        }

    }, [data])


    function shopbuy() {
        //判断token 
        // if(!token){
        // message.info('检测到您未登录，请先登录')
        // }
        if(objdata.style){
            message.info('请先选着款式！')
        }
    }

    function selectvalue(num: any) {
        objdata.size = num
    }
    function inputvalue(num: any) {
        objdata.quantity = num
    }
    function stylename(e: any) {
        objdata.style = e.target.title
        objdata.id = data[0].id
        objdata.spu_id =data[0].spu_id
        console.log(objdata);
    }
    return (
        <div className='details-magnifier'>
            {
                data.map((item: any) => {
                    return (
                        <Fragment key={item.id}>
                            <div className='details-magnifier-left' ref={delitbox}>
                                <aside>
                                    <ul ref={asideul}>
                                        {
                                            imges.map((picture: any, i: number) => {
                                                return <li key={i}><img src={picture.small} alt="" /></li>
                                            })
                                        }
                                    </ul>
                                </aside>
                                <main>
                                    <div className='Showbox' ref={imgbox}>
                                        <img src={imges[0].small} alt="" ref={shopimg1} />
                                        <p ref={magnifier}></p>
                                    </div>
                                    <div className='Hidebox' ref={hideBox}>
                                        <img src={imges[0].normal} alt="" ref={bigImg} />
                                    </div>
                                </main>
                            </div>
                            <div className='details-magnifier-right'>
                                <div className='details-magnifier-right-top'>
                                    <h1>{item.title}</h1>
                                    <span className='nowTimes'>￥{item.price}</span>
                                    <span className='pastTimes'>￥{item.special_price}</span>
                                    <div className="promotion">
                                        <span className="title"> 促销 </span>
                                        <span className="con">官方商城全场包邮</span>
                                    </div>
                                </div>
                                <div className='details-magnifier-right-middel'>
                                    <ul ref={choiceimg}>
                                        {
                                            JSON.parse(item.param).map((title: string, i: number) => {
                                                return <li key={i}><img src={imges[i].small} title={title} onClick={(e) => stylename(e)} /></li>
                                            })
                                        }
                                    </ul>
                                    <section>
                                        <label>尺寸</label>
                                        <Select defaultValue="L" style={{ width: 120 }} bordered={false} onChange={selectvalue}>
                                            <Option value="XL">XL</Option>
                                            <Option value="L">L</Option>
                                            <Option value="S">S</Option>
                                            <Option value="XXL">XXL</Option>
                                        </Select>
                                        <label >数量</label>
                                        <InputNumber min={1} max={10} defaultValue={3} bordered={false} onChange={inputvalue} />
                                    </section>
                                </div>
                                <div className='details-magnifier-right-down'>
                                    <NavLink to='/shopCar' state={data}><span className="down-a" onClick={shopbuy}>加入购物车</span></NavLink>
                                    <NavLink to='/payTotal' state={data}><span className="down-b" onClick={shopbuy}>立即购买</span></NavLink>
                                </div>
                            </div>
                            <Outlet />
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default Magnifier