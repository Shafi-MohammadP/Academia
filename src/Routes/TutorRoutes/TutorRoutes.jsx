import React from "react";
import { Route, Routes } from "react-router-dom";
import TutorLayout from "../../Layouts/TutorLayout";
import TutorHome from "../../Pages/Tutor/Home/TutorHome";

import Tutorprotected from "../protectedRoutes/Tutorprotected";
import TutorProfile from "../../Pages/Tutor/Profile/tutorProfile";
import ApplicationForm from "../../Pages/Tutor/application form/ApplicationForm";

const TutorRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Tutorprotected />}>
          <Route path="/" element={<TutorLayout />}>
            <Route index element={<TutorHome />} />
            <Route path="tutorprofile" element={<TutorProfile />} />
            <Route path="applicationform" element={<ApplicationForm />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default TutorRoutes;
