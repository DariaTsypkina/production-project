import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

const AppRoutes = {
  MAIN: "main",
  ABOUT: "about",
} as const;

export const RoutePath: Record<keyof typeof AppRoutes, string> = {
  MAIN: "/",
  ABOUT: "/about",
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
];

