import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import { useLoaderData } from "react-router-dom";
import Chefs from "../../Components/Chefs";
import { FaFire, FaStar } from "react-icons/fa6";

const Home = () => {
  const loadDatas = useLoaderData();
  const [populachoise, setPopularchoise] = useState([]);
  useEffect(() => {
    fetch(`https://chef-server-eight-beta.vercel.app/popularChoice`)
      .then((res) => res.json())
      .then((data) => setPopularchoise(data));
  }, []);
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
      <div className="my-8 relative ">
        <div className=" bg-black ">
          <img
            className="w-full opacity-40"
            src="https://i.ibb.co/7yfHDZK/jonathan-borba-KSAThu-J9mjs-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="ms-12 w-[650px] text-justify absolute top-[125px]">
          <h1 className="text-4xl text-white font-Nunito font-semibold">
            We Have Over{" "}
            <span className="text-pink-400 font-DancingS font-bold">
              20000+
            </span>{" "}
            Customer in Whole <span className="text-pink-500">State</span> and{" "}
            <span className="text-pink-400 font-DancingS font-bold">20</span>{" "}
            outlets in whole{" "}
            <span className="text-pink-400 font-DancingS font-bold">
              America
            </span>
          </h1>
        </div>
      </div>

      <div className="mt-6" id="popular">
        <h1 className="text-center mb-4 text-4xl font-bold text-pink-600 font-DancingS">
          Most Popular Choices
        </h1>
        <div className="flex mx-3 my-4 mt-5 gap-x-3">
          {populachoise.map((food) => (
            <>
              <div className="w-[400px] indicator flex flex-col rounded-2xl border shadow shadow-pink-500">
                <div className="absolute top-8 right-11">
                  <span className="indicator-item badge badge-secondary dark:bg-pink-600 dark:rounded-lg dark:border-none">
                    {food.rating}&nbsp;
                    <FaStar />
                  </span>
                </div>
                <div className="w-11/12 py-3 mx-auto">
                  <img
                    className="rounded-xl hover:scale-105 transform duration-500"
                    src={food.image_url}
                    alt=""
                  />
                </div>
                <h1 className="ps-4 text-xl text-pink-600 font-bold font-Nunito">
                  {food.name}
                </h1>
                <h1 className="ps-4 pb-3 flex items-center text-pink-600 font-bold font-Nunito">
                  <FaFire />
                  &nbsp;
                  {food.chef_name}
                </h1>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
