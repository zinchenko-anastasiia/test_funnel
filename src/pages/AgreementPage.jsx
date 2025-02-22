import React, { useState } from "react";
import Stack from "../components/Stack";
import IconButton from "../components/IconButton/IconButton";
import RightHolder from "../assets/right_holder.svg";
import LinearProgress from "../components/LinearProgress/LinearProgress";
import Collage from "../components/Collage";
import Select from "../components/Select/Select";
import No from "../assets/no.png";
import Yes from "../assets/yes.png";
import { Link } from "react-router-dom";

const AgreementPage = () => {
  const [agreement, setAgreement] = useState([
    {
      id: 1,
      label: (
        <Link to="/email" className="agreement-link">
          <Stack gap="0.8rem" alignItems="center">
            <img src={No} alt="no" /> <p className="agreement-answear">No</p>
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
            <img src={Yes} alt="Yes" /> <p className="agreement-answear">Yes</p>
          </Stack>
        </Link>
      ),
      selected: false
    }
  ]);
  const testData = [{ bgcolor: "#6a1b9a", completed: 60 }];

  return (
    <Stack justifyContent="space-between" height="100%" alignItems="center">
      <Stack
        height="4rem"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton>
          <img src={RightHolder} alt="right holder" className="right-holder" />
        </IconButton>
        {testData.map((item, idx) => (
          <LinearProgress
            key={idx}
            bgcolor={item.bgcolor}
            completed={item.completed}
          />
        ))}
      </Stack>
      <Stack height="19.4rem">
        <Collage />
      </Stack>
      <Stack alignItems="center" textAlign="center">
        <p className="agreement-text">
          Do you agree to always answer women who take the initiative and
          contact you?
        </p>
        <Select options={agreement} onChange={setAgreement} button={true} />
      </Stack>
    </Stack>
  );
};

export default AgreementPage;
