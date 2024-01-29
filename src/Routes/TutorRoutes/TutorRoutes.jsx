import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TutorLayout from "../../Layouts/TutorLayout";
import TutorHome from "../../Pages/Tutor/Home/TutorHome";

import Tutorprotected from "../protectedRoutes/Tutorprotected";
import TutorProfile from "../../Pages/Tutor/Profile/tutorProfile";
import ApplicationForm from "../../Pages/Tutor/application form/ApplicationForm";
import { useEffect } from "react";
import { BaseUrl } from "../../Constants/Constants";
import { useSelector } from "react-redux";
import axios from "axios";
import TutorCoursesView from "../../Components/tutor/TutorCourseViewAndupdate";

const TutorRoutes = () => {
  const [user, setUser] = useState([]);
  const tutor = useSelector((state) => {
    if (state.user.userInfo.role === "tutor") return state.user.userInfo;
  });
  useEffect(() => {
    if (!tutor) return;
    axios.get(`${BaseUrl}user/tutorProfile/${tutor.user_id}`).then((res) => {
      setUser(res.data);
    });
  }, []);
  return (
    <>
      <Routes>
        <Route element={<Tutorprotected />}>
          <Route path="/" element={<TutorLayout />}>
            <Route index element={<TutorHome />} />
            <Route path="tutorprofile" element={<TutorProfile />} />
            <Route path="courseUpdate/:id/" element={<TutorCoursesView />} />
            <Route path="applicationform/" element={<ApplicationForm />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default TutorRoutes;
