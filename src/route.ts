import { createElement } from "react";
import { createBrowserRouter, Outlet, redirect, type LoaderFunctionArgs } from "react-router";
import Social from "./pages/Social";
import History from "./pages/History";
import HistoryDetail from "./pages/HistoryDetail";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { clearAuthSession, getCurrentUser, getToken } from "./utils/auth";

async function authCheck() {
  const token = getToken();

  if (!token) {
    throw redirect("/auth");
  }

  try {
    const user = await getCurrentUser();

    return { user };
  } catch {
    clearAuthSession();
    throw redirect("/auth");
  }
}

export async function historyDetailLoader({ params }: LoaderFunctionArgs) {
  const { bulan } = params;

  if (!bulan || !/^\d{4}-\d{2}$/.test(bulan)) {
    throw new Response("Format bulan tidak valid", { status: 400 });
  }

  return {
    bulan,
  };
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
        path: "history/:bulan",
        Component: HistoryDetail,
        loader: historyDetailLoader,
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
