import { createElement } from "react";
import { createBrowserRouter, Outlet } from "react-router";
import Social from "./pages/Social";
import History from "./pages/History";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

async function authCheck() {
  console.log("Loading...");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(MainLayout, null, createElement(Outlet)),
    loader: authCheck,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "social",
        Component: Social,
      },
      {
        path: "history",
        Component: History,
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