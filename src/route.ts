import { createElement } from "react";
import { createBrowserRouter, Outlet } from "react-router";
import Social from "./pages/Social";
import SocialDetail from "./pages/SocialDetail";
import History from "./pages/History";
import HistoryDetail from "./pages/HistoryDetail";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
// import { clearAuthSession, getCurrentUser, getToken } from "./utils/auth";
import { allHistory, detailHistory } from "./controller/historyController";
import { dashboardLoader } from "./controller/dashboardController";
import { allFriends, friendDetail } from "./controller/socialController";

async function authCheck() {
  // const token = getToken();

  // if (!token) {
  //   throw redirect("/auth");
  // }

  // try {
  //   const user = await getCurrentUser();

  //   return { user };
  // } catch {
  //   clearAuthSession();
  //   throw redirect("/auth");
  // }
}

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: createElement(MainLayout, null, createElement(Outlet)),
    loader: authCheck,
    children: [
      {
        index: true,
        Component: Dashboard,
        loader: dashboardLoader
      },
      {
        path: "social",
        Component: Social,
        loader: allFriends
      },
      {
        path: "social/:username",
        Component: SocialDetail,
        loader: friendDetail
      },
      {
        path: "history",
        Component: History,
        loader: allHistory
      },
      {
        path: "history/:bulan",
        Component: HistoryDetail,
        loader: detailHistory,
      },
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
  {
    path: "/auth",
    element: createElement(AuthLayout, null, createElement(Outlet)),
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
