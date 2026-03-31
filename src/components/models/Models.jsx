import React from "react";
import { use } from "react";
import Card from "../modelCard/Card";

const Models = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);
  //   console.log(models);

  return (
    <div className="container   mx-auto   lg:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
      {models.map((model) => (
        <Card
          key={model.id}
          model={model}
          carts={carts}
          setCarts={setCarts}
        ></Card>
      ))}
    </div>
  );
};

export default Models;
