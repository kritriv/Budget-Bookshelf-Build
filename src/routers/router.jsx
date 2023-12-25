import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Shop from "../components/shop/Shop";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import { DomainURL } from "../../config";

import SingleBook from "../components/shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) => fetch(`${DomainURL}/book/${params.id}`),
      },
    ],
  },
  {
    path: "/user/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/user/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/user/dashboard/upload",
        element: (
          <PrivateRoute>
            <UploadBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/user/dashboard/manage",
        element: (
          <PrivateRoute>
            <ManageBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/user/dashboard/edit-books/:id",
        element: (
          <PrivateRoute>
            <EditBooks />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${DomainURL}/book/${params.id}`),
      },
    ],
  },
  {
    path: "sign-up",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
]);
export default router;
