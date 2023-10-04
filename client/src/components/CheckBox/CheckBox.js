import React, { useState } from "react";

function CheckBox({ content, value, originCheckList, setOriginCheckList }) {
  const handleOnChange = (e) => {
    const { name, checked } = e.target;

    let temp = originCheckList.map((origin) =>
      origin.province_name === name ? { ...origin, isChecked: checked } : origin
    );

    setOriginCheckList(temp);
  };

  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="hidden checkbox-input"
          name={value?.province_name}
          checked={value?.isChecked || false}
          onChange={handleOnChange}
        />
        <div className="flex items-center justify-center w-4 h-4 mr-2 border border-green-500 rounded-sm shrink-0 after:content-['✓'] after:text-transparent after:font-bold transition-all duration-150 after:transition-all after:duration-150 after:scale-0 checkbox-box"></div>
        {content}
      </label>
    </div>
  );
}

export default CheckBox;
