import AuthLayout from "layouts/AuthLayout";
import PublicLayout from "layouts/PublicLayout";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page/ErrorPage";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <Login /> }],
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <AuthLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [{ path: "/home", element: <div className="">Home</div> }],
  },
]);
