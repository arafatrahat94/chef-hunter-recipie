import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigation } from "react-router-dom";
import LoadingAnimation from "./LoadingAnimation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Chefs = ({ loadDatas }) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingAnimation></LoadingAnimation>;
  }
  console.log(loadDatas);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="w-11/12 mx-auto mb-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {loadDatas.map((chef) => (
          <>
            <SwiperSlide>
              <div className=" relative px-2">
                <div className="">
                  <img
                    className="my-4 ring-2 dark:ring-pink-600  rounded-xl"
                    src={chef.chef_picture}
                    alt=""
                  />
                </div>
                <div className="absolute border border-black w-[273px] text-white bg-black p-2 rounded-lg ps-3 backdrop-blur-md bg-opacity-60 pb-[10px] left-[11px] top-[338px]">
                  <div className="">
                    <h1 className="text-3xl font-bold  font-Nunito">
                      {chef.chef_name}
                    </h1>
                    <h2 className="text-xl">
                      Experience:{" "}
                      <span className="text-2xl font-bold text-pink-600 font-DancingS">
                        {chef.years_of_experience}
                      </span>{" "}
                      Years
                    </h2>
                    <h2 className="font-DancingS text-xl">
                      Recipie:{" "}
                      <span className="text-pink-600 ">
                        {chef.recipes_count}
                      </span>{" "}
                    </h2>
                  </div>
                  <div className="mt-2 ">
                    <button className="focus:ring ring-pink-600 focus:bg-transparent  bg-pink-600 items-center flex py-1 px-2 rounded-lg">
                      Show Recipie &nbsp; <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Chefs;