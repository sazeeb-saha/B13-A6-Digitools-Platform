import { Suspense } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Models from "./components/models/Models";
import Navbar from "./components/navbar/Navbar";
import State from "./components/state/State";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import Workflow from "./components/workflow/Workflow";

const getModels = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const modelPromise = getModels();
function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <State></State>

      <div className="container lg:w-8/12 mx-auto space-y-4 mb-10">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold">Premium Digital Tools</h1>
          <p className=" opacity-65">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
        </div>

        <div className="tabs tabs-box justify-center items-center bg-white">
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full font-bold w-28 ${activeTab === "product" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "tab"}`}
            aria-label="Products"
            onClick={() => setActiveTab("product")}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full font-bold w-28 ${activeTab === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "tab"}`}
            aria-label={`Cart (${carts.length})`}
            onClick={() => setActiveTab("cart")}
          />
        </div>
      </div>

      {/* Suspense comment for re-loading issue  issue  */}
      {/* <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      > */}
      {activeTab === "product" && (
        <Models
          modelPromise={modelPromise}
          carts={carts}
          setCarts={setCarts}
        ></Models>
      )}
      {/* </Suspense> */}

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}

      <Workflow></Workflow>
    </>
  );
}

export default App;
