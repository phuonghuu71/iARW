import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { IoAdd } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import DropDown from "../../../../../components/DropDown/DropDown";

import Table, {
  DefaultColumnFilter,
} from "../../../../../components/Table/Table";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {
  changeProductStatus,
  getProds,
} from "../../../../../actions/product.js";

import { tmp_product } from "../../../../../assets/tmp/tmp_product";

import { useLocation } from "react-router-dom";

import {
  useTable,
  useSortBy,
  usePagination,
  useFilters,
  useGlobalFilter,
  useFlexLayout,
} from "react-table";
import { SocketContext } from "../../../../App";
import ReviewProduct from "../../../../../components/ProductReview/ProductReview";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ProductApproval() {
  const [showModalReview, setShowModalReview] = useState(false);
  const [fetchData, setFetchData] = useState();

  const { socket, setSocket } = useContext(SocketContext);

  const { result } = JSON.parse(localStorage.getItem("profile"));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // dispatch prod and prod types on start
  useEffect(() => {
    dispatch(getProds());
  }, [dispatch]);
  // dispatch prod and prod types

  // get prod from dispatch
  const { prodDatas, isLoading } = useSelector((state) => state.product);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (prodDatas) setData(prodDatas);
  }, [prodDatas]);
  // get prod from dispatch

  // table props
  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

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
        Header: "Ngày cập nhật",
        accessor: "updatedAt",
        width: 200,
      },
      {
        Header: "Tình trạng",
        accessor: "status",
        width: 200,
        Cell: (row) => {
          return (
            <div
              className={`px-3 py-1 mr-2 text-center text-white rounded-full ${
                row.row.original.status === "Chấp thuận"
                  ? "bg-green-500"
                  : row.row.original.status === "Từ chối"
                  ? "bg-red-500"
                  : "bg-yellow-500"
              }`}
            >
              {row.row.original.status}
            </div>
          );
        },
      },
      {
        Header: () => <div className="text-right">Thao tác</div>,
        id: (row) => row.row.id,
        width: 400,
        Cell: (row) => {
          return (
            <div className="flex justify-end">
              <div
              // className={
              //   row.row.original.status.toString() === "Pending"
              //     ? "hidden"
              //     : "block"
              // }
              >
                <button
                  onClick={() => {
                    setFetchData(row.row.original);
                    setShowModalReview(true);
                  }}
                  className="px-3 py-1 mr-2 text-white transition-all duration-150 bg-blue-500 rounded-full hover:bg-blue-600"
                >
                  Xem
                </button>
              </div>
              <div>
                <button
                  onClick={(e) => {
                    handleOnClick(
                      e,
                      "Chấp thuận",
                      row.row.original,
                      `Sản phẩm ${row.row.original.prodName} của bạn đã được chấp thuận`
                    );
                  }}
                  className="px-3 py-1 mr-2 text-white transition-all duration-150 bg-green-500 rounded-full hover:bg-green-600"
                >
                  Chấp thuận
                </button>
              </div>
              <div>
                <button
                  onClick={(e) => {
                    handleOnClick(
                      e,
                      "Từ chối",
                      row.row.original,
                      `Sản phẩm ${row.row.original.prodName} của bạn đã bị từ chối`
                    );
                  }}
                  className="px-3 py-1 text-white transition-all duration-150 bg-red-500 rounded-full hover:bg-red-600"
                >
                  Từ chối
                </button>
              </div>
            </div>
          );
        },
      },
    ],
    []
  );

  const prodInstance = useTable(
    {
      columns,
      data: data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useFlexLayout,
    usePagination
  );
  // table props

  // on click action
  const handleOnClick = async (e, status, data, type) => {
    e.preventDefault();

    dispatch(changeProductStatus({ status }, data._id));

    // dispatch(getProds());

    socket?.emit("sendNotification", {
      senderName: result ? result._id : "",
      receiverName: data ? data.prodUsr : "",
      type,
    });
  };
  // on click action

  return (
    <div className="w-full h-full p-4">
      <div className="flex items-center justify-between mx-4 mb-2">
        <h2 className="h2-text">Duyệt sản phẩm</h2>
      </div>
      <div className="flex flex-col m-4">
        <Table title="Sản phẩm của bạn" instance={prodInstance} />
      </div>
      <br />

      {showModalReview ? (
        <ReviewProduct
          data={fetchData}
          showModal={showModalReview}
          setShowModal={setShowModalReview}
          user={result}
        />
      ) : null}
    </div>
  );
}

export default ProductApproval;
