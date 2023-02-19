import { ButtonHTMLAttributes, FC } from "react";

import { classnames } from "shared/lib/classnames/classnames";
import s from "./Button.module.scss";
import { ButtonSize, ButtonTheme } from "./Button.types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  theme?: ButtonTheme;
  className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    size = "lg",
    theme = ButtonTheme.CLEAR,
    className,
    children,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={classnames(s.btn, [className, s[theme], s[size]], {})}
    >
      {children}
    </button>
  );
};

