import { ButtonHTMLAttributes, FC } from "react";

import s from "./Button.module.scss";

import { classnames } from "shared/lib/classnames/classnames";

export enum ButtonTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    theme = ButtonTheme.PRIMARY,
    className,
    children,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={classnames(s.btn, {}, [className, s[theme]])}
    >
      {children}
    </button>
  );
};

