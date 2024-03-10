import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './styles.css';

// Import your images
import image1 from './assets/shoe.jpg';
import image2 from './assets/shoe.jpg';
import image3 from './assets/shoe.jpg';

const SwiperAutoplay = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty('--progress', 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };

  return (
    <div className="text-xl p-4 transition mx-auto bg-transparent">
      Best Sellers
      <Swiper 
        spaceBetween={25}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* Replace the content of each SwiperSlide with your image elements */}
        <SwiperSlide>
          <img src={image1} alt="Slide 1" style={{ width: '40%', height: 'auto' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Slide 2" style={{ width: '40%', height: 'auto' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Slide 3" style={{ width: '40%', height: 'auto' }} />
        </SwiperSlide>
        {/* Add more SwiperSlides with images as needed */}
        <SwiperSlide>
          <img src={image1} alt="Slide 1" style={{ width: '40%', height: 'auto' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Slide 2" style={{ width: '40%', height: 'auto' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Slide 3" style={{ width: '40%', height: 'auto' }} />
        </SwiperSlide>
        {/* Added More*/}
        <div className="autoplay-progress">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperAutoplay;
