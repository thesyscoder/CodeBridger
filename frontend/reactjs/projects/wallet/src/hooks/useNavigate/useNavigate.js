// React custom hook for use navigate

import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return navigateTo;
};

export default useNavigation;
