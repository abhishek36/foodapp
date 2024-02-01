import React from "react";
import img from "../assets/images/pizza.png";

const Banner = () => {
  return (
    <>
      <main className="w-full">
        <div className="pt-[100px] flex items-center justify-between">
          <div className="left w-[50%] pl-[50px]">
            <h1 className="text-[100px] mb-2 font-lob capitalize leading-[100px] font-medium">
              best food for <br /> your taste
            </h1>
            <p className="text-xl pl-8 mb-5 text-[crimson] font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              saepe incidunt aperiam iste illum iusto praesentium vitae
              dignissimos, nulla perspiciatis?
            </p>
            <button className="bg-pink-200 capitalize border-2 text-xl px-5 py-3 rounded-full ml-7 ">
              view menu
            </button>
          </div>
          <div className="right w-[50%] flex items-center justify-center">
            <img
              src={img}
              alt=""
              // className="animate-pulse duration-1000 ease-in-out"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Banner;
