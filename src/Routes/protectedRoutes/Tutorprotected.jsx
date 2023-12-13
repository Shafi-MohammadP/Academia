import { jwtDecode } from "jwt-decode";
import React from "react";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import { Outlet, useNavigate } from "react-router-dom";
import StudentRoutes from "../StudentRoutes/StudentRoutes";
import CommonLogin from "../../Components/common/commonLogin";
import TutorSignup from "../../Components/common/TutorSignup";

const Tutorprotected = () => {
  const token = localStorage.getItem("authToken");

  if (token) {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken, "Coverting from Tutor side");
    if (decodedToken.is_admin) {
      return <AdminRoutes />;
    } else {
      if (decodedToken.role === "tutor") {
        return <Outlet />;
      } else {
        return <StudentRoutes />;
      }
    }
  } else {
    return <CommonLogin />;
  }
};

export default Tutorprotected;
