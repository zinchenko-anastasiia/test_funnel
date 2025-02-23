import React, { useCallback, useMemo } from "react";
import Select from "../components/Select/Select";
import Logo from "../assets/kismia_logo.svg";
import Button from "../components/Button/Button";
import Stack from "../components/Stack";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../redux/slices/mainSlice/mainSlice";
import {
  userGender,
  userLookingFor
} from "../redux/slices/mainSlice/mainSelector";
import genderConst from "../constants/genderConst";
import ManIcon from "../assets/man.svg";
import WomanIcon from "../assets/woman.svg";

const MAN_ID = genderConst.MAN_ID;
const WOMAN_ID = genderConst.WOMAN_ID;

const GenderPage = () => {
  const dispatch = useDispatch();
  const gender = useSelector(userGender);
  const lookingFor = useSelector(userLookingFor);

  const userGenderOptions = useMemo(
    () =>
      [
        {
          id: MAN_ID,
          label: (
            <>
              <img
                src={ManIcon}
                alt="ManIcon"
                style={{ width: "1.8rem", height: "2.2rem" }}
              />
              Man
            </>
          ),
          selected: false
        },
        {
          id: WOMAN_ID,
          label: (
            <>
              <img
                src={WomanIcon}
                alt="WomanIcon"
                style={{ width: "1.8rem", height: "2.2rem" }}
              />
              Woman
            </>
          ),
          selected: false
        }
      ].map((item) => ({
        ...item,
        selected: item.id === gender
      })),
    [gender]
  );

  const lookingForOptions = useMemo(
    () =>
      [
        {
          id: MAN_ID,
          label: (
            <>
              <img
                src={ManIcon}
                alt="ManIcon"
                style={{ width: "1.8rem", height: "2.2rem" }}
              />
              Man
            </>
          ),
          selected: false
        },
        {
          id: WOMAN_ID,
          label: (
            <>
              <img
                src={WomanIcon}
                alt="WomanIcon"
                style={{ width: "1.8rem", height: "2.2rem" }}
              />
              Woman
            </>
          ),
          selected: false
        }
      ].map((item) => ({
        ...item,
        selected: item.id === lookingFor
      })),
    [lookingFor]
  );

  const onChange = useCallback(
    (id) => {
      dispatch(mainActions.setUserData({ key: "gender", value: id }));
      const autoLookingFor = id === MAN_ID ? WOMAN_ID : MAN_ID;

      if (!lookingFor) {
        dispatch(
          mainActions.setUserData({ key: "lookingFor", value: autoLookingFor })
        );
      }
    },
    [dispatch, lookingFor]
  );

  const onChangeLookingFor = useCallback(
    (id) => {
      dispatch(mainActions.setUserData({ key: "lookingFor", value: id }));
    },
    [dispatch]
  );

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      height="100%"
    >
      <div className="title-wrapper">
        <img src={Logo} alt="Kismia" className="logo" />
        <h1 className="headline">The biggest database of dating profiles</h1>
      </div>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack
          direction="column"
          gap="1.6rem"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            direction="column"
            gap="0.8rem"
            justifyContent="center"
            alignItems="center"
          >
            <p className="body-text">I am...</p>
            <Select options={userGenderOptions} onChange={onChange} />
          </Stack>
          <Stack
            direction="column"
            gap="0.8rem"
            justifyContent="center"
            alignItems="center"
          >
            <p className="body-text">I am looking for...</p>
            <Select options={lookingForOptions} onChange={onChangeLookingFor} />
          </Stack>
          <p className="caption">You can always change who you want to meet</p>
        </Stack>
        <div className="button-wrapper">
          <Link to="/agreement">
            <Button disabled={!gender}>Start</Button>
          </Link>
        </div>
      </Stack>
    </Stack>
  );
};

export default GenderPage;
