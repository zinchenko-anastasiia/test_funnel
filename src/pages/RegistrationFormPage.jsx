import React from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

const RegistrationFormPage = () => (
  <div>
    <h2>Registration</h2>
    <Input value={""} onChange={() => {}} placeholder="Enter your email" />
    <Button>sign in</Button>
  </div>
);

export default RegistrationFormPage;
