import React from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const Card = ({ model, carts, setCarts }) => {
  const [isBuy, setIsBuy] = useState(false);

  const handleBuy = () => {
    setIsBuy(true);
    setCarts([...carts, model]);
  };

  return (
    <div className=" space-y-4 border border-gray-300 rounded-2xl shadow-lg mb-20 p-6 relative">
      <div className="bg-amber-300 rounded-xl w-fit p-3 text-red-500 font-semibold absolute right-4 ">
        <p>{model.tag}</p>
      </div>
      <div className="border border-gray-300 rounded-full w-[60px] h-[60px] flex items-center justify-center">
        <img src={model.icon} alt="Icon Image" />
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{model.name} </h1>
        <p className="text-[#627382]">{model.description}</p>
      </div>
      <div className=" flex ">
        <p className="text-2xl font-bold">${model.price}</p>
        <div className="flex items-baseline-last text-[#627382] ">
          <p className="capitalize">/{model.period}</p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2  text-[#627382]">
          <FaCheck className="text-green-500 font-bold" /> Unlimited AI
          generations{" "}
        </div>
        <div className="flex items-center gap-2  text-[#627382]">
          <FaCheck className="text-green-500 font-bold" /> 50+ writing templates
        </div>
        <div className="flex items-center gap-2  text-[#627382]">
          <FaCheck className="text-green-500 font-bold" /> Grammar checker
        </div>
      </div>
      <button
        onClick={handleBuy}
        className={
          isBuy
            ? "btn bg-linear-to-r from-green-600 to-green-500 w-full rounded-full text-white font-bold p-3.5 mb-6"
            : "btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-full text-white font-bold p-3.5 mb-6"
        }
      >
        {isBuy ? "Added To Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default Card;
