import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Portfolio from "./routes/portfolio";
import { action as contactAction } from "./components/inquiryForm";
import "./main.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
        action: contactAction,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
