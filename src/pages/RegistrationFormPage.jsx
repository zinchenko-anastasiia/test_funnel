import React, { useCallback, useEffect, useRef, useState } from "react";
import Stack from "../components/Stack";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import ProgressNavigation from "../components/ProgressNavigation";
import InformationOutline from "../assets/information-outline.svg";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../redux/slices/mainSlice/mainSlice";
import { userEmail } from "../redux/slices/mainSlice/mainSelector";
import useProgress from "../hooks/useProgress";
import Circular from "../components/Circular/Circular";
import useCircularProgress from "../hooks/useCircularProgress";
import Modal from "../components/Modal";
import Select from "../components/Select/Select";
import useAgreementModalContent from "../hooks/useAgreementModalContent.jsx";

const RegistrationFormPage = () => {
  const [showCircular, setShowCircular] = useState(false);
  const progress = useProgress();
  const emailValue = useSelector(userEmail);
  const dispatch = useDispatch();
  const textInput = useRef(null);
  const percentage = useCircularProgress(showCircular);
  const modalChildren = useAgreementModalContent(percentage);

  useEffect(() => {
    textInput.current?.focus();
  }, []);

  const handleChangesEmail = useCallback(
    (e) => {
      dispatch(mainActions.setUserData({ key: "email", value: e }));
    },
    [dispatch]
  );

  const handleContinue = () => {
    setShowCircular(true);
  };

  if (showCircular) {
    return (
      <Stack alignItems="center" justifyContent="center" height="100vh">
        <Modal open={modalChildren}>
          <Stack justifyContent="center" alignItems="center">
            <p className="agreement-text">{modalChildren?.text}</p>
            <Select
              options={modalChildren?.options}
              onChange={modalChildren?.onChange}
              button={true}
            />
          </Stack>
        </Modal>
        <Circular percentage={percentage} dye="#FF4931" size={16.3 * 10} />
        <p className="body-text">Analyzing your answers...</p>
      </Stack>
    );
  }

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
            ref={textInput}
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
      <Button
        disabled={emailValue?.trim()?.length === 0}
        onClick={handleContinue}
      >
        Continue
      </Button>
    </Stack>
  );
};

export default RegistrationFormPage;
