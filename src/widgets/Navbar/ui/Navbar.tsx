import { FC } from "react";
import { classnames } from "shared/lib/classnames/classnames";
import { AppLink } from "shared/ui";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import s from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={classnames(s.navbar, {}, [className])}>
      <div>logo</div>

      <div className={classnames(s.links, {}, [])}>
        <AppLink to="/">Main</AppLink>
        <AppLink to="/about">About</AppLink>

        <ThemeSwitcher />
      </div>
    </nav>
  );
};

