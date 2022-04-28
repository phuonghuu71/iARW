import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../../../../components/ProductDetails/ProductDetails";
import AccountManagement from "./AccountManagement/AccountManagement";
import Homepage from "./Homepage/Homepage";
import ProductApproval from "./ProductApproval/ProductApproval";
import ProcessManagement from "./ProductManagement/ProcessManagement/ProcessManagement";
import ProductManagement from "./ProductManagement/ProductManagement";

function MainContent({ toggleSidebar }) {
  return (
    <div className={`ml-[4rem] w-[calc(100vw-4rem)] h-full relative`}>
      {/* <Homepage /> */}
      {/* <ProductDetails /> */}
      {/* <ProductManagement /> */}
      {/* <ProcessManagement /> */}
      {/* <ProductApproval /> */}
      {/* <AccountManagement /> */}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productmanager" element={<ProductManagement />} />
        <Route path="/processmanager" element={<ProcessManagement />} />
        <Route path="/productapproval" element={<ProductApproval />} />
        <Route path="/accountmanager" element={<AccountManagement />} />
        <Route path="/details" element={<ProductDetails />} />
      </Routes>

      <div className={`${toggleSidebar ? "active" : ""} dim`}></div>
    </div>
  );
}

export default MainContent;
