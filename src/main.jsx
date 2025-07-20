import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "@/index.css";
import App from "@/App.jsx";
import Home from "@/Pages/Home.jsx";
import WeightLoss from "@/Pages/WeightLoss";
import WeightGain from "@/Pages/WeightGain";
import Skin from "@/Pages/Skin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/programs/weight-loss" element={<WeightLoss />} />
      <Route path="/programs/weight-gain" element={<WeightGain />} />
      <Route path="/programs/skin-hair" element={<Skin />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
