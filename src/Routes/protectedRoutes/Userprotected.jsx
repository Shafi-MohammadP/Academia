import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import StudentRoutes from "../StudentRoutes/StudentRoutes";
import TutorRoutes from "../TutorRoutes/TutorRoutes";
import { jwtDecode } from "jwt-decode";
import CommonLogin from "../../Components/common/commonLogin";

function Userprotected() {
  const token = localStorage.getItem("authToken");

  if (token) {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken, "Conveted Token");
    if (decodedToken.is_admin) {
      return <AdminRoutes />;
    } else {
      if (decodedToken.role === "tutor") {
        return <TutorRoutes />;
      } else {
        return <Outlet />;
      }
    }
  } else {
    return <CommonLogin />;
  }
}

export default Userprotected;
