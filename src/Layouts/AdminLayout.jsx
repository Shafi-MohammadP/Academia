import React from "react";
import { MultiLevelSidebar } from "../Components/admin/Adminsidebar";
import { Outlet, useNavigate } from "react-router-dom";
import Head from "../Components/header/Head";
import { Card, Typography } from "@material-tailwind/react";
import { BellIcon } from "@heroicons/react/24/solid";
import { BiBell } from "react-icons/bi";

import { useEffect, useState } from "react";
import { BaseUrl } from "../Constants/Constants";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const [certificate, setCertificate] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      axios.get(`${BaseUrl}dashboard/certificateList/`).then((response) => {
        setCertificate(response.data);
      });
    } catch (err) {
      console.log(err, "Error During fetching Certificate");
    }
  }, []);
  const handleClick = () => {
    console.log("something");
    navigate("/admin/certificateManagement/", {
      state: { certificateData: certificate },
    });
  };
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
                <div className="relative">
                  {certificate.length > 0 ? (
                    <>
                      <BiBell
                        className="h-8 w-8 text-blue-gray cursor-pointer"
                        onClick={handleClick}
                      />
                      <span className="absolute top-0 -right-[1px] h-4 w-4 inline-block bg-red-500 text-center text-white rounded-full text-xs">
                        {certificate.length}
                      </span>
                    </>
                  ) : (
                    <BiBell className="h-8 w-8 text-blue-gray cursor-pointer" />
                  )}
                </div>
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
