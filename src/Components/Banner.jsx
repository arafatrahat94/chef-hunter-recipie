import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
const Banner = () => {
  return (
    <div>
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          modules={[EffectFade, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
