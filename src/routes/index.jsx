// src/routes/index.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import GenderPage from "../pages/GenderPage";
import AgreementPage from "../pages/AgreementPage";
import RegistrationFormPage from "../pages/RegistrationFormPage";

const RoutesConfig = () => (
  <Routes>
    <Route path="/gender" element={<GenderPage />} />
    <Route path="/agreement" element={<AgreementPage />} />
    <Route path="/email" element={<RegistrationFormPage />} />
  </Routes>
);

export default RoutesConfig;
