import { useSelector } from "react-redux";

export const UserInformation = () => {
  const { isAuthenticated, isLoading, user, error } = useSelector(
    (state) => state.auth
  );

  return { isAuthenticated, isLoading, user, error };
};
