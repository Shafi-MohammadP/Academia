import React from "react";
import Head from "../Components/header/Head";
import { Outlet } from "react-router-dom";
import { TutorStickyNavbar } from "../Components/Navbar/TutorNavbar";


const TutorLayout = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Head />
        <TutorStickyNavbar />
        <Outlet />
      </div>
    </>
  );
};

export default TutorLayout;
