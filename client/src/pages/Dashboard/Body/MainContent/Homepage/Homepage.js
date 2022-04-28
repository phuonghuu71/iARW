import React from "react";
import Card from "../../../../../components/Card/Card";
import CardFilter from "../../../../../components/CardFilter/CardFilter";
import Category from "../../../../../components/Category/Category";

function Homepage() {
  return (
    <div className="w-full h-full p-4">
      <div className="flex">
        <Category />
        <div className="mb-4 ml-4">
          <CardFilter />
          <div className="grid grid-cols-5 gap-4 pb-4min-w-screen">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
