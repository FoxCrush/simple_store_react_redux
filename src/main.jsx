import React from "react";
import ReactDOM from "react-dom/client";
import MainView from "./routes/main-view";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./routes/about-view";
import ErrorPage from "./routes/error-page";
import ShopContainer from "./components/shop-container";

const router = createHashRouter([
  {
    path: "/",
    element: <MainView />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <ShopContainer />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
