import React from "react";
import Banner from "../../Components/Banner";
import { useLoaderData } from "react-router-dom";
import Chefs from "../../Components/Chefs";

const Home = () => {
  const loadDatas = useLoaderData();
  return (
    <div className="relative">
      <div className="absolute backdrop-blur p-3 pb-4   shadow-black shadow-md border-e-0 rounded-s-3xl right-0 z-10 top-[120px] w-[60%]">
        <h1 className="font-DancingS ps-2 pt-2 text-5xl text-pink-500">
          Welcome
        </h1>
        <h2 className="font-Nunito pb-4 tracking-wide text-[40px] ms-14 text-white font-semibold">
          Get American Tasty Foods From{" "}
          <span className="text-6xl tracking-normal text-pink-500">
            Foody World
          </span>
          .
        </h2>
      </div>
      <div className="absolute ps-4 backdrop-blur p-3 pb-4 border-base-300 shadow-md text-center shadow-black rounded-e-3xl left-0 z-10 top-[330px] py-4 w-[35%] pe-4">
        <h2 className="font-Nunito pb-4 tracking-wide text-[30px] ms-2 text-white  font-semibold">
          Pricing Starts{" "}
          <span className="text-pink-500 font-DancingS">Form</span> only
          <span className="text-5xl font-DancingS tracking-normal text-pink-500">
            10$&nbsp;
          </span>
          <button className="font-DancingS bg-pink-600 bg-opacity-100 px-2 pb-1 rounded-lg">
            <a href="#2">buy now</a>
          </button>
        </h2>
      </div>
      <Banner></Banner>
      <h1 className="text-pink-600 text-4xl text-center mt-16 mb-4 font-DancingS font-bold ">
        Meet Our Best Chefs
      </h1>
      <Chefs loadDatas={loadDatas}></Chefs>
    </div>
  );
};

export default Home;
