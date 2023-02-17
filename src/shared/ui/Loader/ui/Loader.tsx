import { FC } from "react";

import { classnames } from "shared/lib/classnames/classnames";
import s from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classnames(s.Loader, [className], {})}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

