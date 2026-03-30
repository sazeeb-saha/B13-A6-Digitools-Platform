import React from "react";

const State = () => {
  return (
    <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  my-24 ">
      <div className="container lg:w-8/12 mx-auto  flex justify-around items-center text-center py-16">
        <div>
          <h2 className="text-white font-extrabold text-6xl">50K+</h2>
          <p className="text-white text-2xl font-medium mt-3 opacity-80">
            Active User{" "}
          </p>
        </div>
        <div className="divider divider-horizontal  before:bg-white after:bg-white opacity-50 "></div>

        <div>
          <h2 className="text-white font-extrabold text-6xl">200K</h2>
          <p className="text-white text-2xl font-medium mt-3 opacity-80">
            Premium Tools
          </p>
        </div>
        <div className="divider divider-horizontal  before:bg-white after:bg-white opacity-50 "></div>
        <div>
          <h2 className="text-white font-extrabold text-6xl">4.9</h2>
          <p className="text-white text-2xl font-medium mt-3 opacity-80">
            Rating
          </p>
        </div>
      </div>
    </section>
  );
};

export default State;
