import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  ErrorPage,
  HomePage,
  LandingPage,
  SignInPage,
  SignUpPage,
} from "./pages";

const AppLayout = () => {
  return (
    <>
      <div className="app-container">
        <ToastContainer />
        <Outlet />
      </div>
    </>
  );
};

const App = () => {
  const appRouter = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <LandingPage />,
          path: "/",
        },
        {
          element: <HomePage />,
          path: "/home",
        },
        {
          element: <SignInPage />,
          path: "/signin",
        },
        {
          element: <SignUpPage />,
          path: "/signup",
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default App;
