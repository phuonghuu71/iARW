import React, { useCallback, useState, useEffect, useMemo } from "react";
import { IoAdd } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import DropDown from "../../../../../components/DropDown/DropDown";
import CreateProduct from "./CreateProduct/CreateProduct";
import EditProduct from "./EditProduct/EditProduct";

import DeleteProduct from "./DeleteProduct/DeleteProduct";
import Table from "../../../../../components/Table/Table";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getProdTypes } from "../../../../../actions/product_type.js";
import { getProdsByUsr } from "../../../../../actions/product.js";

import { useLocation } from "react-router-dom";

import {
  useTable,
  useSortBy,
  usePagination,
  useFilters,
  useGlobalFilter,
  useFlexLayout,
} from "react-table";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ProductManagement() {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [fetchData, setFetchData] = useState();

  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/dashboard/process-manager", { replace: true }),
    [navigate]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProdTypes());
  }, [dispatch]);

  const prodTypeDatas = useSelector((state) => {
    return state.productType.prodTypeDatas.map(({ _id, typeName }) => ({
      id: _id,
      value: typeName,
    }));
  });

  const { result } = JSON.parse(localStorage.getItem("profile"));

  const { prodDatas, isLoading } = useSelector((state) => {
    return state.product;
  });

  useEffect(() => {
    dispatch(getProdsByUsr(result));
  }, [dispatch]);

  const columns = useMemo(
    () => [
      {
        Header: "#",
        width: 50,
        Cell: (row) => {
          return <div>{Number(row.row.id) + 1}</div>;
        },
      },
      {
        Header: "Tên sản phẩm",
        accessor: "prodName",
        width: 300,
      },
      {
        Header: "Ngày đăng",
        accessor: "createdAt",
        width: 200,
      },
      {
        Header: "Tình trạng",
        accessor: "status",
        width: 200,
        Cell: (row) => {
          return (
            <div className="px-3 py-1 mr-2 text-center text-white bg-yellow-500 rounded-full">
              {row.row.original.status}
            </div>
          );
        },
      },
      {
        Header: "Loại sản phẩm",
        accessor: "prodType",
        width: 200,
        filter: "includes",
        Filter: ({ column }) => {
          const { filterValue, setFilter, preFilteredRows, id } = column;

          // Calculate the options for filtering
          // using the preFilteredRows
          const options = useMemo(() => {
            const options = new Set();
            preFilteredRows.forEach((row) => {
              options.add(row.values[id]);
            });
            return [...options.values()];
          }, [id, preFilteredRows]);

          const cvtData = useSelector((state) => {
            return state.productType.prodTypeDatas.map(({ _id, typeName }) => ({
              id: _id,
              value: typeName,
            }));
          });

          return (
            <select
              value={filterValue}
              onChange={(e) => {
                setFilter(e.target.value || undefined);
              }}
              className="w-full"
            >
              <option value="">All</option>
              {options.map((option, i) => (
                <option key={i} value={option}>
                  {cvtData
                    .find((prod) => prod.id.toString() === option.toString())
                    .value.toString()}
                </option>
              ))}
            </select>
          );
        },
        Cell: (row) =>
          useSelector((state) => {
            return state.productType.prodTypeDatas.map(({ _id, typeName }) => ({
              id: _id,
              value: typeName,
            }));
          })
            .find(
              (prod) =>
                prod.id.toString() === row.row.original.prodType.toString()
            )
            .value.toString(),
      },
      {
        Header: () => <div className="text-right">Thao tác</div>,
        id: (row) => row.row.id,
        width: 450,
        Cell: (row) => {
          return (
            <div className="flex justify-end">
              <div>
                <button
                  onClick={handleOnClick}
                  className="px-3 py-1 mr-2 text-white transition-all duration-150 bg-orange-500 rounded-full hover:bg-orange-600"
                >
                  Quản lý quy trình 5 bước
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setFetchData(row.row.original);
                    setShowModalEdit(true);
                  }}
                  className="px-3 py-1 mr-2 text-white transition-all duration-150 bg-blue-500 rounded-full hover:bg-blue-600"
                >
                  Chỉnh sửa
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setFetchData(row.row.original);
                    setShowModalDelete(true);
                  }}
                  className="px-3 py-1 text-white transition-all duration-150 bg-red-500 rounded-full hover:bg-red-600"
                >
                  Xóa
                </button>
              </div>
            </div>
          );
        },
      },
    ],
    []
  );

  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const prodInstance = useTable(
    {
      columns,
      data: prodDatas,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useFlexLayout,
    usePagination
  );

  const [itemType, setItemType] = useState([
    {
      id: "",
      value: "",
    },
  ]);
  // Define a default UI for filtering
  function DefaultColumnFilter({ column }) {
    const { filterValue, preFilteredRows, setFilter } = column;
    return (
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        className="w-full px-2 border border-green-500 rounded-md outline-none"
        placeholder="Nhập thông tin"
      />
    );
  }

  return (
    <div className="w-full h-full p-4">
      <div className="flex items-center justify-between mx-4 mb-2">
        <h2 className="h2-text">Quản lý sản phẩm của bạn</h2>
        <div>
          <button
            onClick={() => setShowModalCreate(true)}
            className="flex items-center button button-success"
          >
            <IoAdd />
            &nbsp;Tạo mới
          </button>
          <CreateProduct
            type={prodTypeDatas}
            user={result}
            showModal={showModalCreate}
            setShowModal={setShowModalCreate}
          />
        </div>
      </div>
      <div className="flex flex-col m-4">
        <Table title="Sản phẩm của bạn" instance={prodInstance} />
      </div>

      <br />

      <EditProduct
        data={fetchData}
        showModal={showModalEdit}
        setShowModal={setShowModalEdit}
      />

      <DeleteProduct
        data={fetchData}
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
        user={result}
      />
    </div>
  );
}

export default ProductManagement;
