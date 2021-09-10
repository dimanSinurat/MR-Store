import React from 'react'
import AdminNavbar from "../../components/Admin/AdminNavbar.js";
import HeaderStats from "../../components/Admin/HeaderStats.jsx";
import Table from "../../components/Cards/Table.jsx"

export default function UserList() {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="relative w-11/12 mx-auto ">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Table/>
        </div>
      </div>
    </div>
  )
}
