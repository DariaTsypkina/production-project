import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

const AppRoutes = {
  MAIN: "main",
  ABOUT: "about",
  NOT_FOUND: "not_found",
} as const;

export const RoutePath: Record<keyof typeof AppRoutes, string> = {
  MAIN: "/",
  ABOUT: "/about",
  NOT_FOUND: "/*",
};

export const routerConfig: RouteProps[] = [
  {
    path: RoutePath.MAIN,
    element: <MainPage />,
  },
  {
    path: RoutePath.ABOUT,
    element: <AboutPage />,
  },
  {
    path: RoutePath.NOT_FOUND,
    element: <NotFoundPage />,
  },
];

