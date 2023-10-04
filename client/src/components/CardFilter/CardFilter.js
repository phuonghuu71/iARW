import React, { useContext, useEffect, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import Card from "../Card/Card";

import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProds, searchProds } from "../../actions/product";
import Category from "../Category/Category";
import origin from "../../assets/tmp/vn";

function CardFilter({ itemsPerPage }) {
  const dispatch = useDispatch();

  // dispatch prod and prod types on start
  useEffect(() => {
    dispatch(getProds());
  }, [dispatch]);
  // dispatch prod and prod types

  // get prod from dispatch
  const { prodDatas, isLoading } = useSelector((state) => state.product);
  // get prod from dispatch

  const [data, setData] = useState(prodDatas);

  useEffect(() => {
    if (prodDatas) {
      setData(prodDatas.filter((prop) => prop.status === "Chấp thuận"));
    }
  }, [prodDatas]);

  // search
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("");

  const [originCheckList, setOriginCheckList] = useState([]);

  useEffect(() => {
    setOriginCheckList(origin);
  }, []);

  const searchByName = (e) => {
    e.preventDefault();

    const filteredList = originCheckList.filter(
      (item) => item.isChecked === true
    );

    dispatch(searchProds(searchName, " ", false, false, filteredList));
  };

  useEffect(() => {
    dispatch(
      searchProds(searchName, searchType, false, false, originCheckList)
    );
  }, [searchType]);

  const filterByPopular = (e) => {
    e.preventDefault();

    dispatch(searchProds("", "", true, false));
  };

  const filterByLatest = (e) => {
    e.preventDefault();

    dispatch(searchProds("", "", false, true));
  };
  // search

  const [currentItems, setCurrentItems] = useState(null);
  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <CheckBoxContext.Provider value={{ originCheckList, setOriginCheckList }}>
      <div className="flex">
        <Category searchType={searchType} setSearchType={setSearchType} />
        <div className="mb-4 ml-4 grow">
          <div>
            <div className="flex items-center justify-between w-full px-4 py-2 mb-2 bg-green-500 rounded-md shadow-sm">
              <div className="flex items-center">
                <p className="mr-2 text-white h1-text-1">Sắp xếp theo</p>
                <button
                  type="button"
                  onClick={(e) => filterByPopular(e)}
                  className="px-4 pt-1 pb-2 mr-2 text-green-500 transition-all duration-150 bg-white rounded-sm hover:bg-green-700 hover:text-white"
                >
                  <p>Phổ biến</p>
                </button>
                <button
                  type="button"
                  onClick={(e) => filterByLatest(e)}
                  className="px-4 pt-1 pb-2 mr-2 text-green-500 transition-all duration-150 bg-white rounded-sm hover:bg-green-700 hover:text-white"
                >
                  <p>Mới nhất</p>
                </button>
              </div>

              <div className="relative mx-auto text-gray-600 w-96">
                <input
                  className="w-full h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Tìm kiếm"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
                <button
                  type="button"
                  onClick={(e) => searchByName(e)}
                  className="absolute top-0 bottom-0 right-4"
                >
                  <BsSearch className="w-4 h-4 text-gray-600 fill-current" />
                </button>
              </div>

              <div className="flex items-center">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4 pb-4min-w-screen">
              {currentItems &&
                currentItems.map((item) => <Card key={item._id} data={item} />)}
            </div>
          </div>
        </div>
      </div>
    </CheckBoxContext.Provider>
  );
}

export const CheckBoxContext = React.createContext();
export default CardFilter;
