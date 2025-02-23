import React, { useMemo } from "react";
import AgreementOption from "../components/AgreementOption";
import No from "../assets/no.png";
import Yes from "../assets/yes.png";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../redux/slices/mainSlice/mainSlice";
import {
  quizeQuestion1,
  quizeQuestion2,
  quizeQuestion3
} from "../redux/slices/mainSlice/mainSelector";

const useAgreementModalContent = (percentage) => {
  const dispatch = useDispatch();
  const question1 = useSelector(quizeQuestion1);
  const question2 = useSelector(quizeQuestion2);
  const question3 = useSelector(quizeQuestion3);

  return useMemo(() => {
    if (percentage >= 25 && percentage < 50) {
      return {
        options: [
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
          selected: item.id === question1
        })),
        text: "Is building a future with a partner who shares your long-term goals essential to you?",
        onChange: (id) =>
          dispatch(
            mainActions.setUserData({ key: "finalQuiz.question1", value: id })
          )
      };
    } else if (percentage >= 50 && percentage < 75) {
      return {
        options: [
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
          selected: item.id === question2
        })),
        text: "Do you prioritize emotional connection and compatibility in your relationships?",
        onChange: (id) =>
          dispatch(
            mainActions.setUserData({
              key: "finalQuiz.question2",
              value: id
            })
          )
      };
    } else if (percentage >= 75 && percentage < 100) {
      return {
        options: [
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
          selected: item.id === question3
        })),
        text: "Do you prefer keeping things light and easy-going when it comes to dating?",
        onChange: (id) =>
          dispatch(
            mainActions.setUserData({ key: "finalQuiz.question3", value: id })
          )
      };
    }
  }, [percentage, question1, question2, question3]);
};

export default useAgreementModalContent;
