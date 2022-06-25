import React, { useState, useEffect } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import cols_items from "../../assets/tmp/cols_items";
import Dropdown from "../DropDown/DropDown";

function Table(props) {
  const [item, setItem] = useState([
    {
      id: 1,
      value: "Hiển thị 10 hàng",
    },
  ]);

  useEffect(() => {
    let selectedItem = Number(item[0].value.split(" ")[2]);
    if (selectedItem !== 10) setPageSize(selectedItem);
    else setPageSize(Number(10));
  }, [item]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
    // pagination
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = props.instance;

  return (
    <div className="flex flex-col bg-white rounded-md shadow-md">
      <div className="flex items-center justify-between p-4">
        <h2 className="h2-text">{props.title}</h2>
        <div className="flex items-center justify-end">
          <p className="mr-2 font-bold p-text-1">Đi tới trang</p>
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            className="w-1/4 px-2 border border-green-500 rounded-md outline-none"
          />
        </div>
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full" {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                      >
                        <div>
                          {column.render("Header")}
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " ▼"
                              : " ▲"
                            : ""}
                        </div>
                        <div className="w-full h-4"></div>
                        {column.canFilter ? column.render("Filter") : ""}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, index) => {
                  prepareRow(row);

                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell, index) => (
                        <td
                          className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex items-center p-4">
              <div className="w-[12rem]">
                <Dropdown
                  title="Hiển thị 10 hàng"
                  items={cols_items}
                  multiSelect={false}
                  setItem={setItem}
                  position="bottom"
                />
              </div>
              <p className="ml-auto mr-2 font-bold p-text-1">
                Trang {pageIndex + 1} trên {pageOptions.length}
              </p>
              <div className="flex items-center">
                <button
                  onClick={() => gotoPage(0)}
                  className="p-2 mr-2 text-white transition-all duration-150 bg-green-500 rounded-full hover:bg-green-600"
                >
                  <FiChevronsLeft className="text-lg" />
                </button>
                <button
                  onClick={() => previousPage()}
                  className="p-2 mr-2 text-white transition-all duration-150 bg-green-500 rounded-full hover:bg-green-600"
                >
                  <FiChevronLeft className="text-lg" />
                </button>
                <button
                  onClick={() => nextPage()}
                  className="p-2 mr-2 text-white transition-all duration-150 bg-green-500 rounded-full hover:bg-green-600"
                >
                  <FiChevronRight className="text-lg" />
                </button>
                <button
                  onClick={() => gotoPage(pageCount - 1)}
                  className="p-2 text-white transition-all duration-150 bg-green-500 rounded-full hover:bg-green-600"
                >
                  <FiChevronsRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
