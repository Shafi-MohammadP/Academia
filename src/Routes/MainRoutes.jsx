import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentRoutes from "./StudentRoutes/StudentRoutes";
import TutorLayout from "../Layouts/TutorLayout";
import TutorRoutes from "./TutorRoutes/TutorRoutes";
import { ToastContainer } from "react-toastify";
import CommonLogin from "../Components/common/commonLogin";
import UserSignUp from "../Components/common/userSignUp";
import TutorSignup from "../Components/common/TutorSignup";
import toast, { Toaster } from "react-hot-toast";
const MainRoutes = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/Login" element={<CommonLogin />} />
        <Route path="/student/Signup/" element={<UserSignUp />} />
        <Route path="/tutor/Signup/" element={<TutorSignup />} />

        <Route path="/*" element={<StudentRoutes />} />
        <Route path="/tutor/*" element={<TutorRoutes />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default MainRoutes;
