import React, { useEffect, useState } from 'react'
import SwiperHreader from '../../components/Swiper';
import instance from '../../Api/request'
import '../../themes/Home/index.scss'
const Home = () => {
  // 存储首页HeaderSwiper图片
  const [imgList, setImgList] = useState([])
  useEffect(() => {
    // HeaderSwiper图片
    (async function () {
      let imgList: any = await instance({
        method: 'post',
        url: '/type/getSwiper',
      })
      let a: any = imgList.res;
      setImgList(a)
      // let Card: any = await instance({
      //   method: 'post',
      //   url: '/wares/getSpu',
      // })
      // console.log(Card);
      

    })()
  }, [])
  return (
    <div>
      <div className='SwiperHreader' style={{minWidth:'1200px'}}>
        <SwiperHreader imgList={imgList}></SwiperHreader>
      </div>
    </div>
  )
}

export default Home
