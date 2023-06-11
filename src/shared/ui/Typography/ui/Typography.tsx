import { createElement, FC, HTMLAttributes, memo } from "react";

import { classnames } from "shared/lib/classnames/classnames";
import s from "./Typography.module.scss";

type Tag = "h" | "p";

type Color = "red-500";

type AdditionalTypographyProps<T> = {
  tag?: T;
  level?: 1 | 2 | 3;
  color?: Color;
  variant?: "bold" | "regular" | "light";
  className?: string;
};

type TypographyProps<T, A> = T extends "h"
  ? HTMLAttributes<HTMLHeadingElement> & A
  : HTMLAttributes<HTMLParagraphElement> & A;

export const Typography: FC<
  TypographyProps<Tag, AdditionalTypographyProps<Tag>>
> = memo((props) => {
  const {
    tag,
    level = 2,
    color,
    variant = "regular",
    className,
    children,
  } = props;

  const classNames = classnames(
    s.Typography,
    [className, s[variant], s[`level-${level}`]],
    { [s[color]]: !!color }
  );

  if (tag === "h") {
    return createElement(
      `h${level}`,
      {
        ...props,
        className: classNames,
      },
      children
    );
  }

  return <p className={classNames}>{children}</p>;
});

