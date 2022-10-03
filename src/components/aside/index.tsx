import React, { useState, useEffect, useRef } from 'react'
import './Aside.scss'
import { Drawer, Space } from 'antd';
import type { DrawerProps } from 'antd/es/drawer';
import 'antd/dist/antd.css';


const Aside = () => {

    const [size, setSize] = useState<DrawerProps['size']>();
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const showDrawer1 = () => {
        setOpen1(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onClose1 = () => {
        setOpen1(false);
    };



    let Top = useRef<HTMLLIElement>(null);
    let Buttom = useRef<HTMLLIElement>(null);

    const handleScroll = (event: any) => {
        //滚动条高度
        let clientHeight = document.documentElement.clientHeight; //可视区域高度
        let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
        let scrollHeight = document.documentElement.scrollHeight; //滚动内容高度
        console.log(scrollTop);

        let liT: any = Top.current;
        if (scrollTop == 0) {
            liT.style.display = 'none';
        } else {
            liT.style.display = 'block';
        }


        let liB: any = Buttom.current;
        if (scrollTop >= scrollHeight - clientHeight - 1) {
            liB.style.display = 'none';
        } else {
            liB.style.display = 'block';
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    const backTop = () => {
        document.documentElement.scrollTop = 0  //滚动条滚动高度 
    }

    const backDown = () => {
        document.documentElement.scrollTop = document.documentElement.scrollHeight  //滚动条滚动高度 
    }


    return (
        <div id='aside'>
            <ul>
                <li onClick={showDrawer}>shopcar</li>
                <li onClick={showDrawer1}>SKR</li>
                <li onClick={() => { backTop() }} ref={Top}>上</li>
                <li onClick={() => { backDown() }} ref={Buttom}>下</li>
            </ul>

            <Drawer
                headerStyle={{ backgroundColor: 'khaki' }}
                title="购物车" placement="right" onClose={onClose} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>

            <div style={{ height: '300px', width: '500px' }}>
                <Drawer

                    headerStyle={{ backgroundColor: 'khaki' }}
                    title={'聊天栏'}
                    placement="right"
                    size={size}
                    onClose={onClose1}
                    open={open1}
                >
                    <p>来啦老弟</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>

        </div >
    )
}
export default Aside;
