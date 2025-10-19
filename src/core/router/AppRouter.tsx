import { useRoutes, type RouteObject } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { authRoutes } from "../../auth/routes";
import { mainRoutes } from "../../apps/main/routes";
import { RouteNotFound } from "../../shared/components/RouteNotFound";

export default function AppRouter() {
  const routes: RouteObject[] = [
    { element: <PublicRoute />, children: [authRoutes] },
    { element: <PrivateRoute />, children: [mainRoutes] },
    { path: "*", element: <RouteNotFound /> },
  ];

  return useRoutes(routes);
}
