import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentLayout from "../../Layouts/StudentLayout";
import Home from "../../Pages/Student/Home/Home";
import Profile from "../../Pages/Student/Profile/Profile";
import Userprotected from "../protectedRoutes/Userprotected";
// import { LoginPage } from "../../Pages/Student/Login/Login";
// import { SignupPage } from "../../Pages/Student/Signup/Signup";

const StudentRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Userprotected />}>
          <Route path="/" element={<StudentLayout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default StudentRoutes;
