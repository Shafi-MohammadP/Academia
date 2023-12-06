import React from "react";
import { MultiLevelSidebar } from "../Components/admin/Adminsidebar";
import { Outlet } from "react-router-dom";
import Head from "../Components/header/Head";
import { Card, Typography } from "@material-tailwind/react";
import { BellIcon } from "@heroicons/react/24/solid";

const AdminLayout = () => {
  return (
    <>
      <div className=" overflow-hidden ">
        <div className="flex h-screen overflow-hidden">
          <MultiLevelSidebar />
          <div className="flex flex-1 flex-col overflow-y-auto overflow-x-auto">
            <div className="w-full p-4 shadow-md bg-white">
              <div className="flex items-center justify-between">
                {" "}
                <Typography variant="h5" color="blue-gray">
                  <span className="text-green-900">ACADEMIA</span>
                </Typography>
                <BellIcon className="h-6 w-6 text-blue-gray cursor-pointer" />
              </div>
              <hr />
            </div>
            <div className={`transition-margin duration-300 `}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
