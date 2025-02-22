import React, { useState } from "react";
import Select from "../components/Select/Select";
import Logo from "../assets/kismia_logo.svg";
import Button from "../components/Button/Button";
import Stack from "../components/Stack";
import { Link } from "react-router-dom";

const GenderPage = () => {
  const [selectedGender, setSelectedGender] = useState([
    { id: 1, label: "Woman 👩", selected: false },
    { id: 2, label: "Man 👨", selected: false }
  ]);
  const [selectedGenderLookingFor, setSelectedGenderLookingFor] = useState([
    { id: 1, label: "Woman 👩", selected: false },
    { id: 2, label: "Man 👨", selected: false }
  ]);

  const onChange = (id) => {
    setSelectedGender((prevState) =>
      prevState.map((option) =>
        id === option.id
          ? { ...option, selected: true }
          : { ...option, selected: false }
      )
    );
  };

  const onChangeLookingFor = (id) => {
    setSelectedGenderLookingFor((prevState) =>
      prevState.map((option) =>
        id === option.id
          ? { ...option, selected: true }
          : { ...option, selected: false }
      )
    );
  };

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
            <Select options={selectedGender} onChange={onChange} />
          </Stack>
          <Stack
            direction="column"
            gap="0.8rem"
            justifyContent="center"
            alignItems="center"
          >
            <p className="body-text">I am looking for...</p>
            <Select
              options={selectedGenderLookingFor}
              onChange={onChangeLookingFor}
            />
          </Stack>
          <p className="caption">You can always change who you want to meet</p>
        </Stack>
        <div className="button-wrapper">
          <Link to="/agreement">
            <Button>Start</Button>
          </Link>
        </div>
      </Stack>
    </Stack>
  );
};

export default GenderPage;
