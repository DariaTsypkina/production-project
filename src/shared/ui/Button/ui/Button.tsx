import { ButtonHTMLAttributes, FC } from "react";

import { classnames } from "shared/lib/classnames/classnames";
import s from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    theme = ButtonTheme.CLEAR,
    className,
    children,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={classnames(s.btn, [className, s[theme]], {})}
    >
      {children}
    </button>
  );
};

