import { ButtonHTMLAttributes, FC, memo } from "react";

import { classnames } from "shared/lib/classnames/classnames";
import s from "./Button.module.scss";
import { ButtonSize, ButtonVariant } from "./Button.types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    size = "lg",
    variant = "clear",
    className,
    fullWidth = false,
    children,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={classnames(s.btn, [className, s[variant], s[size]], {
        [s.fullWidth]: fullWidth,
      })}
    >
      {children}
    </button>
  );
});

