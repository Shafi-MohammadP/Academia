import React from "react";
import Head from "../../../Components/header/Head";
import { TutorStickyNavbar } from "../../../Components/Navbar/TutorNavbar";

const TutorHome = () => {
  return (
    <>
      {" "}
      <Head />
      <TutorStickyNavbar />
      <div className="text-2xl text-center">Welcome to Teacher</div>;{" "}
    </>
  );
};

export default TutorHome;
