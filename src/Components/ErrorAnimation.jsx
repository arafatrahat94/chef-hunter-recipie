import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/72qrxkQg9b.json";
const ErrorAnimation = () => {
  return (
    <div>
      <Lottie
        className="w-96 mx-auto min-h-[71vh] flex items-center"
        animationData={animation}
      />
    </div>
  );
};

export default ErrorAnimation;
