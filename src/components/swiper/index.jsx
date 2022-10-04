// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default  (props) => {
  let { Swidth, Sheight,loop,imgList } = props;
  return (
    <div style={{ width: Swidth, height: Sheight }}>
      <Swiper
        // install Swiper modules
        loop={loop}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
      {
        imgList.map((item, index) => {
          return (
            <SwiperSlide>
              <img src={item.swiperImg} style={{ width: 100 + '%', height: Sheight }} />
            </SwiperSlide>
          )
        })
      }
    </Swiper>
    </div >
  );
};