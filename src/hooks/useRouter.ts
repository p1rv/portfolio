import { useLocation, useNavigate } from "react-router-dom";

export const useRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return {
    navigate,
    location,
  };
};
