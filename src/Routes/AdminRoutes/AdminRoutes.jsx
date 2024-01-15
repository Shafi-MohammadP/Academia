import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../../Layouts/AdminLayout";
import Studentmanagmen from "../../Pages/Admin/sidbar/usermanagement/Studentmanagmen";
import Tutormanagemnet from "../../Pages/Admin/sidbar/usermanagement/Tutormanagemnet";
import Adminprotected from "../protectedRoutes/Adminprotected";
import AdminHome from "../../Pages/Admin/Home/AdminHome";
import CertificateManagement from "../../Pages/Admin/managements/CertificateManagement";
import CourseManagement from "../../Pages/Admin/managements/CourseManagement";
import Category from "../../Pages/Admin/managements/Category";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Adminprotected />}>
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="studentmanagement/" element={<Studentmanagmen />} />
            <Route path="tutormanagment/" element={<Tutormanagemnet />} />
            <Route
              path="certificateManagement"
              element={<CertificateManagement />}
            />
            <Route path="courseManagement" element={<CourseManagement />} />
            {/* <Route path="categoryManagement" /> */}
            <Route path="categoryManagement" element={<Category />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;
