import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classnames } from "shared/lib/classnames/classnames";
import { Button, ButtonTheme } from "shared/ui/Button";
import s from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const reloadPage = () => location.reload();

  return (
    <div className={classnames(s.PageError, [className], {})}>
      <p className={classnames(s.PageErrorTitle)}>
        {t("Произошла непредвиденная ошибка")}
      </p>
      <Button onClick={reloadPage} theme={ButtonTheme.PRIMARY}>
        {t("Обновить страницу")}
      </Button>
    </div>
  );
};

