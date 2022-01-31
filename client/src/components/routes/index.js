import React from "react";

import { Routes, Route } from "react-router-dom";
import ForgetPasswordPage from "../../pages/ForgetPasswordPage";
import LoginPage from "../../pages/LoginPage";
import QuotationPage from "../../pages/QuotationPage";
import QuotationPageId from "../../pages/QuotationPageId";
import Navbar from "../Navbar/Navbar";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
      </Routes>
      <Navbar />
      <Routes>
        <Route path="/quotation" element={<QuotationPage />} />
        <Route path="/quotation/:id" element={<QuotationPageId />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
