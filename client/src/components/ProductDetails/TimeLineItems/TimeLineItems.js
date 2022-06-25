import React from "react";

import { tmp_5steps } from "../../../assets/tmp/tmp_5steps";
import ItemsDetails from "./ItemsDetails/ItemsDetails";

function TimeLineItems() {
  return tmp_5steps.map((item) => {
    return (
      <div
        className={`timeline ${item.step >= 4 ? "time-line-orange" : ""}`}
        key={item.id}
      >
        <div className="pl-8">
          <span
            className={`inline-block px-2 py-1 mx-0 mb-4 -mt-2 text-sm font-bold text-white ${
              item.step >= 4 ? "bg-orange-500" : "bg-green-500"
            } rounded-md h2-text`}
          >
            {`Bước ${item.step}: ${item.stepName}`}
          </span>
        </div>

        {item.stepList.map((step) => (
          <ItemsDetails stepNum={item.step} step={step} />
        ))}
      </div>
    );
  });
}

export default TimeLineItems;
