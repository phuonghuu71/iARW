import React from "react";
import CardFilter from "../../../../../components/CardFilter/CardFilter";
import Category from "../../../../../components/Category/Category";

function Homepage() {
  return (
    <div className="w-full h-full p-4">
      <CardFilter itemsPerPage={10} />
    </div>
  );
}

export default Homepage;
