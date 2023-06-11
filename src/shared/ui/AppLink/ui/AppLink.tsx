import { FC, memo } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classnames } from "shared/lib/classnames/classnames";

import s from "./AppLink.module.scss";

type AppLinkVariant = "primary" | "secondary";

interface AppLinkProps extends LinkProps {
  variant?: AppLinkVariant;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
  const { children, to, className, variant = "primary", ...otherProps } = props;

  return (
    <Link
      {...otherProps}
      to={to}
      className={classnames(s.link, [className, s[variant]], {})}
    >
      {children}
    </Link>
  );
});

