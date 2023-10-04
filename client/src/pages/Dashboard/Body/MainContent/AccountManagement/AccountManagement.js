import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useFilters,
  useFlexLayout,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { getUsers, updateRole } from "../../../../../actions/user";

import Table, {
  DefaultColumnFilter,
} from "../../../../../components/Table/Table";

function AccountManagement() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const { result } = JSON.parse(localStorage.getItem("profile"));

  const { userDatas, isLoading } = useSelector((state) => state.user);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (userDatas)
      setData(userDatas.filter((prop) => prop.email !== result.email));
  }, [userDatas]);

  const handleChangeRole = async (e, row) => {
    e.preventDefault();

    dispatch(updateRole(row.row.original._id, { role: e.target.value }));
  };

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
        Header: "Email",
        accessor: "email",
        width: 350,
      },
      {
        Header: "Quyền",
        accessor: "role",
        width: 300,
      },
      {
        Header: "Ngày tạo",
        accessor: "createdAt",
        width: 300,
      },
      {
        Header: () => <div className="text-right">Phân quyền</div>,
        id: (row) => row.row.id,
        width: 350,
        Cell: (row) => {
          return (
            <div className="flex items-center justify-end gap-x-4">
              <div className="flex items-center gap-x-1">
                <input
                  type="radio"
                  id="user"
                  checked={row.row.original.role === "user"}
                  name={`${row.row.original.id}`}
                  onChange={(e) => handleChangeRole(e, row)}
                  value="user"
                />
                <label htmlFor="user">user</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="radio"
                  id="admin"
                  checked={row.row.original.role === "admin"}
                  name={`${row.row.original.id}`}
                  onChange={(e) => handleChangeRole(e, row)}
                  value="admin"
                />
                <label htmlFor="admin">admin</label>
              </div>
            </div>
          );
        },
      },
    ],
    [data]
  );

  const userInstance = useTable(
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

  return (
    <div className="w-full h-full p-4">
      <div className="flex items-center justify-between mx-4 mb-2">
        <div className="w-[12rem]">
          <h2 className="h2-text">Quản lý tài khoản</h2>
        </div>
      </div>
      <Table title="Danh sách tài khoản" instance={userInstance} />
      <br />
    </div>
  );
}

export default AccountManagement;
