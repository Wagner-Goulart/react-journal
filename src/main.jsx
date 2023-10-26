/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Home } from "./dia-03-react-router-e-navegacao/routes/home.jsx";
import { Contact } from "./dia-03-react-router-e-navegacao/routes/contact.jsx";
import { ErrorPage } from "./dia-03-react-router-e-navegacao/routes/ErrorPage.jsx";
import { ContactDetails } from "./dia-03-react-router-e-navegacao/routes/ContacDetails.jsx";

// Configurando o router na versão mais atual

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element: <Home />
//   },
//   {
//     path : "contact",
//     element: <Contact />
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage  />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/contact/:id",
        element: <ContactDetails />
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
