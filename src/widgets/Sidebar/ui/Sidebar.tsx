import { FC, useState } from "react";

import { classnames } from "shared/lib/classnames/classnames";

import { Button } from "shared/ui/Button";
import { AppLink } from "shared/ui/AppLink";
import { RoutePath } from "app/providers/Router/lib/routeConfig";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "features/LangSwitcher";

import BurgerIcon from "shared/assets/icons/burger.svg";
import HomeIcon from "shared/assets/icons/home.svg";
import InfoIcon from "shared/assets/icons/info.svg";

import s from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const [collapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => setIsCollapsed((state) => !state);

  return (
    <aside
      data-testid="sidebar"
      className={classnames(s.sidebar, [className], {
        [s.collapsed]: collapsed,
      })}
    >
      <Button onClick={toggleCollapsed} className={s.burgerButton}>
        <BurgerIcon />
      </Button>

      <AppLink to={RoutePath.MAIN} className={s.linkItem}>
        <HomeIcon />
        <span className={s.link}>{t("Главная")}</span>
      </AppLink>

      <AppLink to={RoutePath.ABOUT} className={s.linkItem}>
        <InfoIcon />
        <span className={s.link}>{t("О сайте")}</span>
      </AppLink>

      <LangSwitcher />
    </aside>
  );
};

