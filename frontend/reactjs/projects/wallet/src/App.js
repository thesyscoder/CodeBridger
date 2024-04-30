// App.js
import React from "react";
import "./App.scss";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AboutPage,
  ErrorPage,
  HomePage,
  LandingPage,
  SignInPage,
  SignUpPage,
} from "./pages";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const AppLayout = () => {
  return (
    <>
      <div className="content-container">
        <Outlet />
        <ToastContainer />
      </div>
    </>
  );
};

const App = () => {
  const AppRouter = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/signin",
          element: <SignInPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={AppRouter}></RouterProvider>;
};

export default App;
