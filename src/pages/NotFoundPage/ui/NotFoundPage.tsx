import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { classnames } from "shared/lib/classnames/classnames";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classnames("", [className], {})}>
      {t("Страница не найдена")}
    </div>
  );
});

