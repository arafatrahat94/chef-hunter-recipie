import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import DarkmodeButton from "./DarkmodeButton";
const Banner = () => {
  const [bigBanner, setBigBanner] = useState([]);
  useEffect(() => {
    fetch(`https://chef-server-eight-beta.vercel.app/bannerBig`)
      .then((res) => res.json())
      .then((data) => setBigBanner(data));
  }, []);
  return (
    <div className="">
      <div className="absolute lg:hidden z-20 text-white top-[270px] shadow shadow-black backdrop-blur rounded-e-full w-28 flex justify-end">
        <div className=" rounded-full ps-1">
          <DarkmodeButton></DarkmodeButton>
        </div>
      </div>
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
              delay: 5500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper p-0  lg:h-[500px]  bg-black"
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
