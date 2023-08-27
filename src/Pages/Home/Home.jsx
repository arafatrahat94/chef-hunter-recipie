import React from "react";
import Banner from "../../Components/Banner";

const Home = () => {
  return (
    <div>
      <div className="absolute backdrop-blur p-3 pb-4 border-base-300 border border-e-0 rounded-s-3xl right-0 z-10 top-[120px] w-[60%]">
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
      <Banner></Banner>
    </div>
  );
};

export default Home;
