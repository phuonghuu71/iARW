import React, { useContext, useEffect, useState } from "react";

import origin from "../../assets/tmp/vn.js";
import { CheckBoxContext } from "../CardFilter/CardFilter.js";
import CheckBox from "../CheckBox/CheckBox.js";

function CheckBoxGroup({ toggle }) {
  const { originCheckList, setOriginCheckList } = useContext(CheckBoxContext);

  return (
    <div
      className={`${toggle ? "block" : "hidden"} h-48 overflow-y-scroll w-full`}
    >
      {originCheckList.map((prop, index) => {
        return (
          <div key={index}>
            <CheckBox
              value={prop}
              originCheckList={originCheckList}
              setOriginCheckList={setOriginCheckList}
              content={<p className="p-text-1">{prop.province_name}</p>}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CheckBoxGroup;
