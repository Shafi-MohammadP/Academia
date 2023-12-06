import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../../Layouts/AdminLayout";
import Studentmanagmen from "../../Pages/Admin/sidbar/usermanagement/Studentmanagmen";
import Tutormanagemnet from "../../Pages/Admin/sidbar/usermanagement/Tutormanagemnet";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="studentmanagement/" element={<Studentmanagmen />} />
          <Route path="tutormanagment/" element={<Tutormanagemnet />} />
        </Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;
