import React from "react";

import { Routes, Route } from "react-router-dom";
import ForgetPasswordPage from "../../pages/ForgetPasswordPage";
import LoginPage from "../../pages/LoginPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
