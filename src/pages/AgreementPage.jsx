import React, { useCallback, useMemo } from "react";
import Stack from "../components/Stack";
import Collage from "../components/Collage";
import Select from "../components/Select/Select";
import No from "../assets/no.png";
import Yes from "../assets/yes.png";
import { Link } from "react-router-dom";
import ProgressNavigation from "../components/ProgressNavigation";
import useProgress from "../hooks/useProgress";
import {
  userAgreement,
  userLookingFor
} from "../redux/slices/mainSlice/mainSelector";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../redux/slices/mainSlice/mainSlice";
import genderConst from "../constants/genderConst";

const MAN_ID = genderConst.MAN_ID;

const AgreementPage = () => {
  const dispatch = useDispatch();
  const progress = useProgress();
  const lookingFor = useSelector(userLookingFor);
  const agreement = useSelector(userAgreement);

  const agreementText = useMemo(
    () =>
      lookingFor === MAN_ID
        ? "Do you agree that man should take the initiative to meet a woman?"
        : "Do you agree to always answer women who take the initiative and contact you?",
    [lookingFor]
  );

  const agreementOptions = useMemo(
    () =>
      [
        {
          id: 1,
          label: (
            <Link to="/email" className="agreement-link">
              <Stack gap="0.8rem" alignItems="center">
                <img src={No} alt="no" />{" "}
                <p className="agreement-answear">No</p>
              </Stack>
            </Link>
          ),
          selected: false
        },
        {
          id: 2,
          label: (
            <Link to="/email" className="agreement-link">
              <Stack gap="0.8rem" alignItems="center">
                <img src={Yes} alt="Yes" />{" "}
                <p className="agreement-answear">Yes</p>
              </Stack>
            </Link>
          ),
          selected: false
        }
      ].map((item) => ({
        ...item,
        selected: item.id === agreement
      })),
    [agreement]
  );

  const handleChangeAgreement = useCallback(
    (id) => {
      dispatch(mainActions.setUserData({ key: "agreement", value: id }));
    },
    [dispatch]
  );

  return (
    <Stack justifyContent="space-between" height="100%" alignItems="center">
      <ProgressNavigation progressData={[{ completed: progress }]} />
      <Stack height="19.4rem">
        <Collage />
      </Stack>
      <Stack alignItems="center" textAlign="center">
        <p className="agreement-text">{agreementText}</p>
        <Select
          options={agreementOptions}
          onChange={handleChangeAgreement}
          button={true}
        />
      </Stack>
    </Stack>
  );
};

export default AgreementPage;
