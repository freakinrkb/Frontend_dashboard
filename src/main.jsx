import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import Home from "@/pages/Home.jsx";
import About from "@/pages/About.jsx";
import Contact from "@/pages/Contact.jsx";
import Career from "@/pages/Career.jsx";
import Service from "@/pages/Service.jsx";

import "@styles/index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="career" element={<Career />} />
      <Route path="services" element={<Service />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
