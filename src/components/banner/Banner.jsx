import React from "react";
import bannerDot from "../../assets/products/banner-dot.png";
import play from "../../assets/products/Play.png";
import bannerImg from "../../assets/products/banner.png";

const Banner = () => {
  return (
    <div className=" container lg:w-8/12 mx-auto">
      <div className="flex justify-between flex-col md:flex-row gap-2.5 mt-20 items-center">
        <div className="space-y-4">
          <div
            className="flex items-center font-semibold gap-1.5 bg-[#E1E7FF] rounded-full pl-3
        py-0.5 w-[294px]  "
          >
            <img className="w-4 h-4 " src={bannerDot} alt="" />
            <p>New: AI-Powered Tools Available</p>
          </div>
          <h1 className="text-7xl font-extrabold">
            Supercharge Your <br />
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
              Digital Workflow
            </span>
          </h1>
          <p className="opacity-65 text-lg ">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex items-center gap-4">
            <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-6 ">
              Explore Products
            </button>

            <div class=" p-[1px] bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full">
              <div class="bg-white rounded-full">
                <button className="flex items-center gap-1.5  bg-linear-to-r from-[#4F39F6] to-[#9514FA] border px-2.5 py-2.5  rounded-full bg-clip-text text-transparent font-bold ">
                  <img src={play} alt="" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
