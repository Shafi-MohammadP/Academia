import React from "react";
import { Route, Routes } from "react-router-dom";
import TutorLayout from "../../Layouts/TutorLayout";
import TutorHome from "../../Pages/Tutor/Home/TutorHome";

const TutorRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TutorLayout />}></Route>
        <Route index element={<TutorHome />} />
      </Routes>
    </>
  );
};

export default TutorRoutes;
