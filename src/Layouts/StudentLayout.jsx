import React from "react";
import Head from "../Components/header/Head";
import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../Components/Navbar/Navbar";

const StudentLayout = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Head />
        <StickyNavbar />
        <Outlet />
      </div>
    </>
  );
};

export default StudentLayout;
