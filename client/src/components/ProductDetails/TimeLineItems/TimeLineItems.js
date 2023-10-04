import React from "react";

import { tmp_5steps } from "../../../assets/tmp/tmp_5steps";
import ItemsDetails from "./ItemsDetails/ItemsDetails";

function TimeLineItems({ data }) {
  const getStep = data.map((item) => item.step);
  const filterStep = getStep.filter(
    (prop, index) => getStep.indexOf(prop) === index
  );

  return filterStep.map((item) => {
    return (
      <div
        className={`timeline ${
          parseInt(item.substring(5, 6)) >= 4 ? "time-line-orange" : ""
        }`}
        key={item._id}
      >
        <div className="pl-8">
          <span
            className={`inline-block px-2 py-1 mx-0 mb-4 -mt-2 text-sm font-bold text-white ${
              parseInt(item.substring(5, 6)) >= 4
                ? "bg-orange-500"
                : "bg-green-500"
            } rounded-md h2-text`}
          >
            {`Bước ${item.substring(5, 6)}: ${item.substring(9)}`}
          </span>
        </div>
        {data
          .filter(
            (prop) =>
              parseInt(prop.step.substring(5, 6)) ===
              parseInt(item.substring(5, 6))
          )
          .map((step) => (
            <ItemsDetails
              key={step._id}
              stepId={step._id}
              stepNum={parseInt(step.step.substring(5, 6))}
              description={step.description}
              note={step.note}
              time={step.createdAt}
            />
          ))}
      </div>
    );
  });
}

export default TimeLineItems;
