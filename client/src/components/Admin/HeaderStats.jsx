import React from "react";
import {useHistory} from "react-router-dom"
import CardStats from "../Cards/CardMenu.jsx";

export default function HeaderStats() {
  let history = useHistory()
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-20 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 hover:bg-green-500 pointer" onClick={()=> history.push('/admin')}>
                <CardStats
                  statSubtitle="DASHBOARD"
                  statTitle=""
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Order Request"
                  statIconName="https://img.icons8.com/ios/50/000000/user.png"
                  statIconColor="bg-gray-200"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 hover:bg-green-500 pointer" onClick={()=> history.push('/admin/user')}>
                <CardStats
                  statSubtitle="USER"
                  statTitle="120 Person"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="see all user list"
                  statIconName="https://img.icons8.com/ios/50/000000/user.png"
                  statIconColor="bg-gray-200"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4 hover:bg-green-500 pointer" onClick={()=> history.push('/admin/add')}>
                <CardStats
                  statSubtitle="ADD PRODUCT"
                  statTitle="150 Items"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="add a new product"
                  statIconName="https://img.icons8.com/android/50/000000/plus.png"
                  statIconColor="bg-gray-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
