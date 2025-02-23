import React, { useCallback, useMemo } from "react";
import Stack from "../components/Stack";
import Collage from "../components/Collage";
import Select from "../components/Select/Select";
import No from "../assets/no.png";
import Yes from "../assets/yes.png";
import ProgressNavigation from "../components/ProgressNavigation";
import useProgress from "../hooks/useProgress";
import {
  userAgreement,
  userLookingFor
} from "../redux/slices/mainSlice/mainSelector";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../redux/slices/mainSlice/mainSlice";
import genderConst from "../constants/genderConst";
import AgreementOption from "../components/AgreementOption";
import manPhoto1 from "../assets/people/man1.png";
import manPhoto2 from "../assets/people/man2.png";
import manPhoto3 from "../assets/people/man3.png";
import womanPhoto1 from "../assets/people/woman1.jpg";
import womanPhoto2 from "../assets/people/woman2.jpg";
import womanPhoto3 from "../assets/people/woman3.jpg";

const MAN_ID = genderConst.MAN_ID;

const AgreementPage = () => {
  const dispatch = useDispatch();
  const progress = useProgress();
  const lookingFor = useSelector(userLookingFor);
  const agreement = useSelector(userAgreement);

  const agreementContant = useMemo(
    () =>
      lookingFor === MAN_ID
        ? {
            text: "Do you agree that man should take the initiative to meet a woman?",
            photo: [manPhoto3, manPhoto1, manPhoto2]
          }
        : {
            text: "Do you agree to always answer women who take the initiative and contact you?",
            photo: [womanPhoto1, womanPhoto3, womanPhoto2]
          },
    [agreement]
  );

  const agreementOptions = useMemo(
    () =>
      [
        {
          id: 1,
          label: (
            <AgreementOption
              label={{ img: No, text: "No" }}
              link={true}
              to="/email"
            />
          ),
          selected: false
        },
        {
          id: 2,
          label: (
            <AgreementOption
              label={{ img: Yes, text: "Yes" }}
              link={true}
              to="/email"
            />
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
        <Collage photo={agreementContant?.photo} />
      </Stack>
      <Stack alignItems="center" textAlign="center">
        <p className="agreement-text">{agreementContant?.text}</p>
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
