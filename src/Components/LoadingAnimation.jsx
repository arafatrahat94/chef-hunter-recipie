import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/animation_lltjtyhe.json";
const LoadingAnimation = () => {
  return (
    <div className="">
      <Lottie
        className="w-96 mx-auto min-h-[71vh] flex items-center"
        animationData={animation}
      />
    </div>
  );
};

export default LoadingAnimation;
