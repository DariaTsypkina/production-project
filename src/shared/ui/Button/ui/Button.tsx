import { ButtonHTMLAttributes, FC } from "react";

import { classnames } from "shared/lib/classnames/classnames";
import s from "./Button.module.scss";
import { ButtonSize, ButtonVariant } from "./Button.types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    size = "lg",
    variant = "clear",
    className,
    children,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={classnames(s.btn, [className, s[variant], s[size]], {})}
    >
      {children}
    </button>
  );
};

