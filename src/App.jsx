import { Suspense } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Models from "./components/models/Models";
import Navbar from "./components/navbar/Navbar";
import State from "./components/state/State";
import Cart from "./components/cart/Cart";
import { useState } from "react";

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

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center items-center bg-white">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full font-bold w-28"
          aria-label="Products"
          onClick={() => setActiveTab("product")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full font-bold w-28"
          aria-label="Cart"
          onClick={() => setActiveTab("cart")}
        />
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
    </>
  );
}

export default App;
