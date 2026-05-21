import { useRouteLoaderData } from "react-router";
import { getStoredUser, getToken, type AuthUser } from "../utils/auth";

type AuthLoaderData = {
  user: AuthUser;
};

export default function useAuth() {
  const loaderData = useRouteLoaderData("root") as AuthLoaderData | undefined;
  const user = loaderData?.user ?? getStoredUser();

  return {
    user,
    token: getToken(),
    isAuthenticated: Boolean(user && getToken()),
  };
}
