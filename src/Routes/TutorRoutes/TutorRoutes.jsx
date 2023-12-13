import React from "react";
import { Route, Routes } from "react-router-dom";
import TutorLayout from "../../Layouts/TutorLayout";
import TutorHome from "../../Pages/Tutor/Home/TutorHome";
import Tutorprotected from "../protectedRoutes/Tutorprotected";

const TutorRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Tutorprotected />}>
          <Route path="/" element={<TutorLayout />}></Route>
          <Route index element={<TutorHome />} />
        </Route>
      </Routes>
    </>
  );
};

export default TutorRoutes;
