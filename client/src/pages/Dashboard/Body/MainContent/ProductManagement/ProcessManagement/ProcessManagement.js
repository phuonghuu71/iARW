import React, { useEffect, useMemo, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import CreateProcess from "./CreateProcess/CreateProcess";
import Table, {
  DefaultColumnFilter,
} from "../../../../../../components/Table/Table";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProcByProds } from "../../../../../../actions/process";

import {
  useTable,
  useSortBy,
  usePagination,
  useFilters,
  useGlobalFilter,
  useFlexLayout,
} from "react-table";
import EditProcess from "./EditProcess/EditProcess";
import DeleteProcess from "./DeleteProcess/DeleteProcess";
import { toast } from "react-toastify";

function ProcessManagement() {
  const dispatch = useDispatch();

  const [fetchData, setFetchData] = useState();

  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const { state } = useLocation();

  useEffect(() => {
    dispatch(getProcByProds(state.payload._id));
  }, [dispatch]);

  const { procDatas, isLoading } = useSelector((state) => {
    return state.process;
  });

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
        Header: "Bước",
        accessor: "step",
        width: 200,
      },
      {
        Header: "Mô tả",
        accessor: "description",
        width: 300,
      },
      {
        Header: "Ghi chú",
        accessor: "note",
        width: 250,
      },
      {
        Header: "Ngày đăng",
        accessor: "createdAt",
        width: 200,
      },
      {
        Header: () => <div className="text-right">Thao tác</div>,
        id: (row) => row.row.id,
        width: 350,
        Cell: (row) => {
          return (
            <div className="flex justify-end">
              <div>
                <button
                  onClick={() => {
                    let date = new Date(row.row.original.createdAt);

                    let today = new Date();

                    let seconds = Math.floor((today - date) / 1000);
                    let minutes = Math.floor(seconds / 60);
                    let hours = Math.floor(minutes / 60);

                    if (hours > 1) {
                      toast("Đã quá 1 giờ, không thể sửa", {
                        position: "bottom-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    } else {
                      setFetchData(row.row.original);
                      setShowModalEdit(true);
                    }
                  }}
                  className="px-3 py-1 mr-2 text-white transition-all duration-150 bg-blue-500 rounded-full hover:bg-blue-600"
                >
                  Chỉnh sửa
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    let date = new Date(row.row.original.createdAt);

                    let today = new Date();

                    let seconds = Math.floor((today - date) / 1000);
                    let minutes = Math.floor(seconds / 60);

                    if (minutes > 15) {
                      toast("Đã quá 15 phút, không thể xóa", {
                        position: "bottom-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    } else {
                      setFetchData(row.row.original);
                      setShowModalDelete(true);
                    }
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

  const procInstance = useTable(
    {
      columns,
      data: procDatas,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useFlexLayout,
    usePagination
  );

  return (
    <div className="w-full h-full p-4">
      <div className="flex items-center justify-between mx-4 mb-2">
        <h2 className="h2-text">Quản lý quy trình 5 bước</h2>
        <div>
          <button
            className="flex items-center button button-warning"
            onClick={() => setShowModalCreate(true)}
          >
            <IoAdd />
            &nbsp;Tạo mới
          </button>
          <CreateProcess
            showModal={showModalCreate}
            setShowModal={setShowModalCreate}
            data={{ id: state.payload._id }}
          />
        </div>
      </div>
      <div className="flex flex-col m-4">
        <div className="flex items-center w-full p-4 my-4 ml-auto bg-white rounded-md shadow-md">
          <div className="w-[12rem]">
            <h2 className="h2-text">{state.payload.prodName}</h2>
          </div>
        </div>

        <Table title="Quy trình sản phẩm" instance={procInstance} />
      </div>

      <br />

      <EditProcess
        data={fetchData}
        showModal={showModalEdit}
        setShowModal={setShowModalEdit}
      />

      <DeleteProcess
        data={fetchData}
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
      />
    </div>
  );
}

export default ProcessManagement;
