import React from "react";
import Head from "../Components/header/Head";
import { Outlet } from "react-router-dom";
import { TutorStickyNavbar } from "../Components/Navbar/TutorNavbar";
import TutorNavbarNew from "../Components/Navbar/TutorNavbarNew";

const TutorLayout = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* <Head /> */}
        <TutorStickyNavbar />
        {/* <TutorNavbarNew /> */}
        <Outlet />
      </div>
    </>
  );
};

export default TutorLayout;
