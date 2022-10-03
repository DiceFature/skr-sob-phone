// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import img1 from '../../assets/image/img1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const imgList = [img1, img1, img1, img1];



export default (props) => {
  let { Swidth, Sheight,loop } = props;
  console.log(Swidth, Sheight);
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
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >


      {
        imgList.map((item, index) => {
          return (
            <SwiperSlide>
              <img src={item} style={{ width: 100 + '%', height: Sheight }} />
            </SwiperSlide>
          )
        })
      }


    </Swiper>
    </div >
  );
};