// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import img1 from '../../assets/image/img1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const imgList = [img1, img1, img1, img1]

export default (props: any) => {
    let { Swidth, Sheight, loop, card } = props;

    return (
        <div style={{ width: Swidth, height: Sheight }}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                // pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}

                // 设置一个窗口中图的个数
                slidesPerView={3}
                //两个图之间的距离
                spaceBetween={40}
                //设置卡片式轮播
                centeredSlides={true}
                loop={loop}
                pagination={
                    {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                }
            >
                {
                    imgList.map((item, index) => {
                        return (
                            <SwiperSlide style={{ width: 600 + 'px' }}>
                                <img src={item} style={{ width: 100 + '%', height: Sheight }} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div >
    );
};