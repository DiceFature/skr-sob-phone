import React, { useEffect, useState } from 'react'
import './event.scss'
import Swiper from '../../components/swiper'
import { getSwiper } from 'Api/api'
import E1 from '../../assets/image/event/E1.png'
import E2 from '../../assets/image/event/E2.jpg'
import E3 from '../../assets/image/event/E3.png'
import E4 from '../../assets/image/event/E4.jpg'
import { NavLink } from 'react-router-dom'
import Best from 'pages/Best'


export default function Event() {

    let [swiperList, setSwiperList] = useState([])

    useEffect(() => {
        getSwiper().then((data: any) => {
            setSwiperList(data.res)
        })
    }, [])


    return (
        <div id='event'>
            <h1>EVENT</h1>
            <div id='eventSwiper'>
                <Swiper Swidth='1000px' Sheight='385px' loop={true} imgList={swiperList} />
            </div>
            <div id='cet'>
                <div id='section'>
                    <div id='sec_lt'>
                        <h2 id='sec_lt_top'>MY❤BRAND EVENT</h2>

                        <div id='sec_lt_down'>
                            <p> 로그인 하시면 MY❤에 등록한 BRAND의 최근 EVENT를 확인할 수 있습니다. </p>
                            <button id='btn'>로그인</button>
                        </div>
                    </div>

                    <div id='sec_rt'>
                        <h2>BENEFIT</h2>
                        <ul>
                            <li style={{ border: 'none' }}><img src={E1} /></li>
                            <li><img src={E2} /></li>
                            <li><img src={E3} /></li>
                            <li><img src={E4} /></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id='textContainer'>
                <div id='text'>
                    <div id='title'>
                        <h2>hot keyword</h2>
                    </div>
                    <div id='main'>
                        <NavLink to={'/home'}>21SS도 함께할 베스트 아이템! #The Best, Forever</NavLink>
                    </div>
                </div>
            </div>
            <div id='text_search'>
                {/* <input type="text" />
                <button></button> */}
            </div>

            <div id='eventShopList'>
                <Best />
            </div>


        </div>
    )
}
