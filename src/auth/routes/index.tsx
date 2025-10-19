import { type RouteObject } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";

export const authRoutes: RouteObject = {
  path: "/auth",
  children: [
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
  ],
};
