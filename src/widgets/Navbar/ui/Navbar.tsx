import { LangSwitcher } from "features/LangSwitcher";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classnames } from "shared/lib/classnames/classnames";
import { AppLink } from "shared/ui/AppLink";

import s from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <nav className={classnames(s.navbar, [className], {})}>
      <div>logo</div>

      <div className={classnames(s.links, [], {})}>
        <AppLink to="/">{t("Главная")}</AppLink>
        <AppLink to="/about">{t("О сайте")}</AppLink>

        <ThemeSwitcher />

        <LangSwitcher />
      </div>
    </nav>
  );
};

