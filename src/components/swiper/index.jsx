// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default (props) => {
  let { Swidth, Sheight, loop, imgList } = props;
  console.log(imgList);
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
        onAutoplay={{ onAutoplay: true }}
      >
        {
          imgList.map((item, index) => {
            // 处理图片文件不同
            let imgs;
            if (item.img) {
              imgs = item.img;
            } else if (item.swiperImg) {
              imgs = item.swiperImg;
            }
            return (
              <SwiperSlide >
                <img src={imgs} style={{ width: 100 + '%', height: Sheight }} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div >
  );
};