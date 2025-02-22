import React, { useState } from "react";
import Stack from "../components/Stack";
import Collage from "../components/Collage";
import Select from "../components/Select/Select";
import No from "../assets/no.png";
import Yes from "../assets/yes.png";
import { Link } from "react-router-dom";
import ProgressNavigation from "../components/ProgressNavigation";

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
  const testData = [{ completed: 60 }];

  return (
    <Stack justifyContent="space-between" height="100%" alignItems="center">
      <ProgressNavigation progressData={testData} />
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
