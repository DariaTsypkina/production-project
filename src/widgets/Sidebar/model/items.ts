import { RoutePath } from "app/providers/Router/lib/routeConfig";

import HomeIcon from "shared/assets/icons/home.svg";
import InfoIcon from "shared/assets/icons/info.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.MAIN,
    text: "Главная",
    Icon: HomeIcon
  },
  {
    path: RoutePath.ABOUT,
    text: "О сайте",
    Icon: InfoIcon
  },
  {
    path: RoutePath.PROFILE,
    text: "Профиль",
    Icon: ProfileIcon
  },
];