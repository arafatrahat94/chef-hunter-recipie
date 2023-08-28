import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Link, useNavigation } from "react-router-dom";
import LoadingAnimation from "./LoadingAnimation";
import { FaArrowLeft, FaArrowRight, FaThumbsUp } from "react-icons/fa6";

const Chefs = ({ loadDatas }) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingAnimation></LoadingAnimation>;
  }
  console.log(loadDatas);

  return (
    <div id="" className="w-11/12 mx-auto mb-4">
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
              <div className="hidden lg:block relative px-2">
                <div className="  ">
                  <img
                    className="my-4 ring-2 dark:ring-pink-600  rounded-xl"
                    src={chef.chef_picture}
                    alt=""
                  />
                </div>
                <div className="absolute shadow-md shadow-black border border-black w-[278px] text-white bg-black p-2 rounded-lg ps-3 backdrop-blur-md bg-opacity-60 pb-[10px] left-[7px] top-[335px]">
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
                  <div className="mt-2 flex items-center">
                    <Link
                      to={`/recipie/${chef.uid}`}
                      className="focus:ring ring-pink-600 focus:bg-transparent  bg-pink-600 items-center flex py-1 px-2 rounded-lg"
                    >
                      Show Recipie &nbsp; <FaArrowRight />
                    </Link>
                    <div className="flex items-center gap-2 ms-auto me-2">
                      <FaThumbsUp /> {chef.likes}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>

      <div className="lg:hidden grid grid-cols-2">
        {loadDatas.map((chef) => (
          <>
            <div className=" relative px-2">
              <div className="mx-auto w-[155px]">
                <img
                  className="my-4 ring-2 dark:ring-pink-600  rounded-xl"
                  src={chef.chef_picture}
                  alt=""
                />
              </div>
              <div className="absolute scale-90 z-20 shadow-md shadow-black border border-black  text-white bg-black p-2 rounded-lg w-[172px] ps-3 backdrop-blur-md bg-opacity-60 pb-[10px] left-0 top-[168px]">
                <div className="">
                  <h1 className=" font-bold  font-Nunito">{chef.chef_name}</h1>
                  <h2 className="">
                    Experience:{" "}
                    <span className="font-bold text-pink-600 font-DancingS">
                      {chef.years_of_experience}
                    </span>{" "}
                    Years
                  </h2>
                  <div className="flex gap-x-2">
                    <h2 className="font-DancingS ">
                      Recipie:{" "}
                      <span className="text-pink-600 ">
                        {chef.recipes_count}
                      </span>{" "}
                    </h2>
                    <div className="flex items-center gap-1 ms-auto me-2">
                      <FaThumbsUp /> {chef.likes}
                    </div>
                  </div>
                </div>
                <div className="mt-2  items-center">
                  <Link
                    to={`/recipie/${chef.uid}`}
                    className="focus:ring text-sm ring-pink-600 focus:bg-transparent w-11/12 bg-pink-600 items-center flex py-1  px-2 rounded-lg"
                  >
                    Show Recipie &nbsp; <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
