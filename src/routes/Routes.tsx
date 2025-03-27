import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page/ErrorPage";
import HomePage from "../pages/home/HomePage";
import CustomersPage from "../pages/kyc/customers/CustomersPage";
import PeoplesPage from "../pages/kyc/peoples/PeoplesPage";
import PrivateRoute from "./PrivateRoute";
import { Login, Register } from "../modules/auth/AuthModule";
import AuthLayout from "../layouts/AuthLayout";
import PublicLayout from "../layouts/PublicLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <AuthLayout />,
        children: [{ path: "/", element: <HomePage /> }],
      },
    ],
  },
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  {
    path: "/kyc",
    element: <PrivateRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [{ path: "customers", element: <CustomersPage /> }],
      },
      {
        element: <AuthLayout />,
        children: [{ path: "peoples", element: <PeoplesPage /> }],
      },
      {
        element: <AuthLayout />,
        children: [
          { path: "organizations", element: <div className="">Customer</div> },
        ],
      },
    ],
  },
]);
