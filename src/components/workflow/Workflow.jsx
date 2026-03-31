import React from "react";
import createAccImg from "../../assets/products/user.png";
import chooseProductImg from "../../assets/products/package.png";
import rocketImg from "../../assets/products/rocket.png";

const Workflow = () => {
  return (
    <div className="mt-32  mb-32">
      <div className="container w-11/12 lg:w-8/12 mx-auto">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-extrabold">Get Started in 3 Steps</h1>
          <p className="opacity-65">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="mt-10  space-y-4 grid grid-cols-1 md:grid-cols-3 gap-5 h-full">
          <div className="border rounded-2xl border-gray-200 shadow-xl flex flex-col justify-center items-center text-center px-6  py-20 relative">
            <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 flex justify-center items-center rounded-full absolute top-4 right-4">
              <p className="text-white font-bold">01</p>
            </div>
            <div className="bg-[#f3e8fe] rounded-full  w-25 h-22.5  flex justify-center items-center ">
              <img src={createAccImg} alt="" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Create Account</h2>
              <p className="opacity-65">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          <div className="border rounded-2xl border-gray-200 shadow-xl flex flex-col justify-center items-center text-center px-6  py-20 relative">
            <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 flex justify-center items-center rounded-full absolute top-4 right-4">
              <p className="text-white font-bold">01</p>
            </div>
            <div className="bg-[#f3e8fe] rounded-full  w-25 h-22.5  flex justify-center items-center ">
              <img src={createAccImg} alt="" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Create Account</h2>
              <p className="opacity-65">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          <div className="border rounded-2xl border-gray-200 shadow-xl flex flex-col justify-center items-center text-center px-6  py-20 relative h-fit">
            <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 flex justify-center items-center rounded-full absolute top-4 right-4">
              <p className="text-white font-bold">01</p>
            </div>
            <div className="bg-[#f3e8fe] rounded-full  w-25 h-22.5  flex justify-center items-center ">
              <img src={createAccImg} alt="" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Create Account</h2>
              <p className="opacity-65">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
