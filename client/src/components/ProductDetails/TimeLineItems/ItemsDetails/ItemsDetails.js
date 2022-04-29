import React, { useState } from "react";

import { BsChevronDown, BsChevronRight } from "react-icons/bs";

function ItemsDetails({ step }) {
  const [toggleAccordion, setToggleAccordion] = useState(false);
  return (
    <div
      className="pl-12 mb-4 cursor-pointer"
      onClick={() => setToggleAccordion(!toggleAccordion)}
      key={step.id}
    >
      <div className="flex items-center">
        {!toggleAccordion ? (
          <BsChevronRight className="mr-2 text-sm h2-text" />
        ) : (
          <BsChevronDown className="mr-2 text-sm h2-text" />
        )}
        <h2 className="text-sm h2-text">
          {`${step.timeline.time}, ${step.timeline.date}, ${step.timeline.note}`}
        </h2>
      </div>
      <div
        className={`${
          toggleAccordion ? "block" : "hidden"
        } px-4 py-2 text-white rounded-md bg-green-500`}
      >
        <p className="mb-2">Chú thích: </p>
        {step.tags.map((tag, index) => {
          return (
            <p key={index} className="pl-4 mb-2 leading-relaxed text-justify">
              {tag}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default ItemsDetails;
