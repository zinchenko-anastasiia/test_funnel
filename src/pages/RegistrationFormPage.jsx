import React from "react";
import Stack from "../components/Stack";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import ProgressNavigation from "../components/ProgressNavigation";

const RegistrationFormPage = () => {
  const testData = [{ completed: 60 }];

  return (
    <Stack alignItems="center" justifyContent="space-between" height="100%">
      <ProgressNavigation progressData={testData} />
      <Stack gap="2.9rem" alignItems="center">
        <Stack gap="0.8rem" alignItems="center">
          <h2 className="email-title">Enter your email</h2>
          <p className="email-subtitle">To get access to the profiles</p>
        </Stack>
        <Stack gap="1.6rem" alignItems="center">
          <Input
            value={""}
            onChange={() => {}}
            placeholder="Enter your email"
          />
          <p className="email-info">
            This information will be used for the registration process only and
            won&apos;t be visible to other users.
          </p>
        </Stack>
      </Stack>
      <Button>Continue</Button>
    </Stack>
  );
};

export default RegistrationFormPage;
