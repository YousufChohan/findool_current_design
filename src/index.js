import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Root from "./Routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Routes/Error";
import { Fundraising } from "./Routes/Fundraising";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Signup from "./Routes/Auth/Signup";
import Login from "./Routes/Auth/Login";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/fundraising",
        element: <Fundraising />,
      },
    ],
  },
  {
    element: <Signup />,
    path: "/signup",
    errorElement: <Error />,
  },
  {
    element: <Login />,
    path: "/login",
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
