import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classnames } from "shared/lib/classnames/classnames";

import s from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    children,
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      {...otherProps}
      to={to}
      className={classnames(s.link, [className, s[theme]], {})}
    >
      {children}
    </Link>
  );
};

