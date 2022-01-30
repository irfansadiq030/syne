import React from "react";

import { Routes, Route } from "react-router-dom";
import ForgetPasswordPage from "../../pages/ForgetPasswordPage";
import LoginPage from "../../pages/LoginPage";
import QuotationPage from "../../pages/QuotationPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
        <Route path="/quotation" element={<QuotationPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
