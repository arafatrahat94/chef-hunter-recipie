import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import DarkmodeButton from "./DarkmodeButton";
import LazyLoad from "react-lazy-load";
import { useNavigation } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigation();
  const [bigBanner, setBigBanner] = useState([]);
  useEffect(() => {
    fetch(`https://chef-server-eight-beta.vercel.app/bannerBig`)
      .then((res) => res.json())
      .then((data) => setBigBanner(data));
  }, []);
  return (
    <div className="">
      <div className="absolute ring ring-pink-600 ring-s-0 customO:top-[240px] lg:hidden z-20 text-pink-600 top-[220px] shadow shadow-black backdrop-blur rounded-e-full w-20 flex justify-end">
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
                  <img
                    src={img}
                    loading="lazy"
                    className="opacity-40  w-full"
                    alt=""
                  />
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
