import { jwtDecode } from "jwt-decode";
import React from "react";
import { Outlet } from "react-router-dom";
import TutorRoutes from "../TutorRoutes/TutorRoutes";
import StudentRoutes from "../StudentRoutes/StudentRoutes";
import CommonLogin from "../../Components/common/commonLogin";

function Adminprotected() {
  const token = localStorage.getItem("authToken");

  if (token) {
    const decodeToken = jwtDecode(token);
    console.log(decodeToken, "Coveritng from admin side");
    if (decodeToken.is_admin) {
      return <Outlet />;
    } else {
      if (decodeToken.role === "tutor") {
        return <TutorRoutes />;
      } else {
        return <StudentRoutes />;
      }
    }
  } else {
    return <CommonLogin />;
  }
}

export default Adminprotected;
