import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const Banner = () => {
  const [bigBanner, setBigBanner] = useState([]);
  useEffect(() => {
    fetch(`https://chef-server-eight-beta.vercel.app/bannerBig`)
      .then((res) => res.json())
      .then((data) => setBigBanner(data));
  }, []);
  return (
    <div className="">
      <div className="">
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper p-0 h-[500px]  bg-black"
          >
            {bigBanner.map((img) => (
              <>
                <SwiperSlide>
                  <img src={img} className="opacity-40  w-full" alt="" />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Banner;
