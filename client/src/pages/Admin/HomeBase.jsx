import React from 'react'
import AdminNavbar from "../../components/Admin/AdminNavbar.js";
import HeaderStats from "../../components/Admin/HeaderStats.jsx";
import OrderFinish from '../../components/Cards/OrderFinish.jsx';
import OrderRequest from '../../components/Cards/OrderRequest.jsx';

export default function HomeBase() {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="relative w-11/12 mx-auto ">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap mt-4 ">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <OrderRequest />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <OrderFinish />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
