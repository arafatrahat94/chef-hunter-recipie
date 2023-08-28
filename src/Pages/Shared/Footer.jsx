import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer text-white p-10 pt-12 rounded-t-lg bg-pink-600 ">
        <div>
          <div>
            <h1 className="text-4xl  font-DancingS font-bold ">Foody World</h1>
          </div>
          <p className="font-bold  font-DancingS text-xl">
            American Food Corner
            <br />
            Providing reliable service since 1992
          </p>
        </div>

        <div className="font-bold font-Nunito text-xl">
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
