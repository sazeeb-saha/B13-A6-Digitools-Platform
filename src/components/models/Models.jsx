import React from "react";
import { use } from "react";
import Card from "../modelCard/Card";

const Models = ({ modelPromise }) => {
  const models = use(modelPromise);
  //   console.log(models);

  return (
    <div className="container   mx-auto   lg:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
      {models.map((model) => (
        <Card key={model.id} model={model}></Card>
      ))}
    </div>
  );
};

export default Models;
