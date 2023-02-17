import { FC } from "react";

import { classnames } from "shared/lib/classnames/classnames";
import { Loader } from "shared/ui/Loader";
import s from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classnames(s.PageLoader, [className], {})}>
      <Loader />
    </div>
  );
};

