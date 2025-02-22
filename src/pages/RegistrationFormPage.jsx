import React, { useCallback } from "react";
import Stack from "../components/Stack";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import ProgressNavigation from "../components/ProgressNavigation";
import InformationOutline from "../assets/information-outline.svg";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../redux/slices/mainSlice/mainSlice";
import { userEmail } from "../redux/slices/mainSlice/mainSelector";
import useProgress from "../hooks/useProgress";

const RegistrationFormPage = () => {
  const progress = useProgress();
  const emailValue = useSelector(userEmail);
  const dispatch = useDispatch();

  const handleChangesEmail = useCallback(
    (e) => {
      dispatch(mainActions.setUserData({ key: "email", value: e }));
    },
    [dispatch]
  );

  return (
    <Stack alignItems="center" justifyContent="space-between" height="100%">
      <ProgressNavigation progressData={[{ completed: progress }]} />
      <Stack gap="2.9rem" alignItems="center">
        <Stack gap="0.8rem" alignItems="center">
          <h2 className="email-title">Enter your email</h2>
          <p className="email-subtitle">To get access to the profiles</p>
        </Stack>
        <Stack gap="1.6rem" alignItems="center">
          <Input
            value={emailValue}
            onChange={({ target }) => handleChangesEmail(target.value)}
            placeholder="Enter your email"
          />
          <Stack alignItems="center" gap="1.2rem" direction="row">
            <img src={InformationOutline} alt="information outline" />
            <p className="email-info">
              This information will be used for the registration process only
              and won&apos;t be visible to other users.
            </p>
          </Stack>
        </Stack>
      </Stack>
      <Button disabled={emailValue?.trim()?.length === 0}>Continue</Button>
    </Stack>
  );
};

export default RegistrationFormPage;
