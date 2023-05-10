import React from "react";
import { RiFlag2Line } from "react-icons/ri";
import Video from '../../assets/address-container-animation.webm'

const Hero = () => {
  return (
    <div className="">
      <div className="hero pt-7 bg-amber-400">
        <div className="hero-content flex-col lg:flex-row-reverse sm:flex-col-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl font-bold ml-24">Food delivery and more</h1>
            <p className="py-6 text-xl font-semibold ml-24">Groceries, shops, pharmacies, anything!</p>
            <div className="flex ml-24">
              <div className="bg-emerald-600 px-3 rounded-s-lg">
                <RiFlag2Line className="mt-4 text-2xl text-white " />
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-3/4 rounded-none   rounded-e-lg"
              />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <video autoPlay loop muted src={Video} className="bg-amber-400 "></video>
          </div>
        </div>
      </div>
      <div className="mt-[-100px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFBF00"
            fill-opacity="1"
            d="M0,192L48,202.7C96,213,192,235,288,245.3C384,256,480,256,576,224C672,192,768,128,864,112C960,96,1056,128,1152,154.7C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
