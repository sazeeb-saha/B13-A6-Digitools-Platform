import { Suspense } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Models from "./components/models/Models";
import Navbar from "./components/navbar/Navbar";
import State from "./components/state/State";

const getModels = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const modelPromise = getModels();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <State></State>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Models modelPromise={modelPromise}></Models>
      </Suspense>
    </>
  );
}

export default App;
