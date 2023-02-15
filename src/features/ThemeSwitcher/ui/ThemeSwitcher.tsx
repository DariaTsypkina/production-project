import { ButtonHTMLAttributes, FC } from "react";

import { classnames } from "shared/lib/classnames/classnames";
import { useTheme } from "shared/lib/useTheme/useTheme";

import Sun from "shared/assets/icons/sun.svg";
import Moon from "shared/assets/icons/moon.svg";
import { Theme } from "shared/lib/useTheme/ThemeContext";
import s from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={classnames(s.btn, [className], {})}
      onClick={toggleTheme}
    >
      <Moon />
      <Sun />
      <span
        className={classnames(s.circle, [], { [s.left]: theme === Theme.DARK })}
      />
    </button>
  );
};

