import React from "react";

import { Routes, Route } from "react-router-dom";
import AddProductJobsPage from "../../pages/AddProductJobsPage";
import AddProductQuotesPage from "../../pages/AddProductQuotesPage";
import ForgetPasswordPage from "../../pages/ForgetPasswordPage";
import JobIdPage from "../../pages/JobIdPage";

import JobsPage from "../../pages/JobsPage";
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
        <Route
          path="/quotation/addproduct"
          element={<AddProductQuotesPage />}
        />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobIdPage />} />
        <Route path="/jobs/addproduct" element={<AddProductJobsPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
