import React, { useState } from "react";
import Select from "../components/Select/Select";
import Logo from "../assets/kismia_logo.svg";
import Button from "../components/Button/Button";

const GenderPage = () => {
  const [selectedGender, setSelectedGender] = useState([
    { id: 1, label: "Woman 👩", selected: false },
    { id: 2, label: "Man 👨", selected: false }
  ]);
  const [selectedGenderLookingFor, setSelectedGenderLookingFor] = useState([
    { id: 1, label: "Woman 👩", selected: false },
    { id: 2, label: "Man 👨", selected: false }
  ]);

  console.log(selectedGender, "selectedGender");

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
    <div>
      <img src={Logo} alt="Kismia" />
      <h1>The biggest database of dating profiles</h1>
      <p>I am...</p>
      <Select options={selectedGender} onChange={onChange} />
      <p>I am looking for...</p>
      <Select
        options={selectedGenderLookingFor}
        onChange={onChangeLookingFor}
      />
      <p>You can always change who you want to meet</p>
      <Button to="/agreement">Start</Button>
    </div>
  );
};

export default GenderPage;
