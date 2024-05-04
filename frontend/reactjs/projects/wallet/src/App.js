import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  ErrorPage,
  HomePage,
  LandingPage,
  SignInPage,
  SignUpPage,
} from "./pages";
import { Toaster } from "react-hot-toast";

const AppLayout = () => {
  return (
    <>
      <div className="app-container">
        <Outlet />
        <Toaster
          toastOptions={{
            success: {
              style: {
                color: "green",
              },
            },
            error: {
              style: {
                color: "red",
              },
            },
          }}
        ></Toaster>
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
