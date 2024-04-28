// App.js
import React from "react";
import "./App.css";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/molecules";
import {
  AboutPage,
  ErrorPage,
  HomePage,
  LandingPage,
  SignInPage,
  SignUpPage,
} from "./pages";

const AppLayout = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";
  return (
    <>
      {showNavbar && <Navbar />}
      <div className="content-container">
        <Outlet />
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
