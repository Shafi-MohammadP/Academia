import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentLayout from "../../Layouts/StudentLayout";
import Home from "../../Pages/Student/Home/Home";
import Userprotected from "../protectedRoutes/Userprotected";
import StudentProfilePage from "../../Pages/Student/Profile/StudentProfile";
import CourseView from "../../Components/Student/CourseView";
// import { LoginPage } from "../../Pages/Student/Login/Login";
// import { SignupPage } from "../../Pages/Student/Signup/Signup";

const StudentRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StudentLayout />}>
          <Route element={<Userprotected />}>
            <Route index element={<Home />} />
            <Route path="studentprofile/" element={<StudentProfilePage />} />
            <Route path="courseView/:id/" element={<CourseView />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default StudentRoutes;
