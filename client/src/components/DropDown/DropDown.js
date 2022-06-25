import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./styles.scss";

function Dropdown({
  select = "",
  title,
  items,
  multiSelect = false,
  position = "bottom",
  setItem,
  showModal,
}) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  useEffect(() => {
    if (!showModal) {
      setOpen(false);
      setSelection([]);
    }
  }, [showModal]);

  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
        setItem([
          {
            ...item,
            id: item.id,
            value: item.value,
          },
        ]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
        setItem([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
    if (!multiSelect) setOpen(false);
  }

  function isItemInSelection(item) {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="mr-2 text-green-600 dd-header__title">
          {selection.length > 0 && multiSelect === false ? (
            selection.map((item) => (
              <p className="dd-header__title--bold" key={item.id}>
                {item.value}
              </p>
            ))
          ) : (
            <p className="dd-header__title--bold">
              {select !== "" ? select : title}
            </p>
          )}
        </div>
        <div className="mt-[3px] dd-header__action">
          <FaChevronDown
            className={`${
              open ? "rotate-180" : "rotate-0"
            } fast-animation ease-in-out text-green-600`}
          />
        </div>
      </div>
      {open && (
        <ul className={`dd-list ${position === "top" ? "top" : "bottom"}`}>
          {items.map((item) => (
            <li
              className={`${isItemInSelection(item) ? "active" : ""}`}
              key={item.id}
            >
              <button
                className="flex justify-between bg-white py-2 px-5 border-none border-b-[1px] border-green-400 text-center w-full border-x-[1px]"
                type="button"
                onClick={() => {
                  handleOnClick(item);
                  setOpen(false);
                }}
              >
                <span>{item.value}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
