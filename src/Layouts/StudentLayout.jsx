import React from "react";
// import Head from "../Components/header/Head";
import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../Components/Navbar/Navbar";
import DemoNavbar from "../Components/Demo/DemoNavbar";
import StudentNavbar from "../Components/Navbar/StudentNavbar";

const StudentLayout = () => {
  return (
    <>
      <div className="overflow-x-hidden min-h-screen">
        {/* <Head /> */}
        {/* <StickyNavbar /> */}
        {/* <DemoNavbar /> */}
        <StudentNavbar />
        <Outlet />
      </div>
    </>
  );
};

export default StudentLayout;
