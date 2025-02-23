import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userGender } from "../../redux/slices/mainSlice/mainSelector";

const RedirectOnPageReload = () => {
  const navigate = useNavigate();
  const gender = useSelector(userGender);

  useEffect(() => {
    if (!gender) {
      navigate("/");
    }
  }, [gender, navigate]);

  return null;
};

export default RedirectOnPageReload;
