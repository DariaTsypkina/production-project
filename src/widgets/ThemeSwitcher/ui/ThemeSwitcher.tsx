import { FC } from "react";

import s from "./ThemeSwitcher.module.scss";

import { classnames } from "shared/lib/classnames/classnames";
import { useTheme } from "shared/lib/useTheme/useTheme";

import Sun from "shared/assets/icons/sun.svg";
import Moon from "shared/assets/icons/moon.svg";
import { Button } from "shared/ui";
import { Theme } from "shared/lib/useTheme/ThemeContext";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classnames(s.btn, {}, [className])}
      onClick={toggleTheme}
    >
      <Moon />
      <Sun />
      <span
        className={classnames(s.circle, { [s.left]: theme === Theme.DARK }, [])}
      />
    </Button>
  );
};

