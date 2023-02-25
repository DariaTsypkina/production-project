import { FC, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import { classnames } from "shared/lib/classnames/classnames";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import s from "./LoginForm.module.scss";

interface LoginFormProps {
  isOpen: boolean;
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { isOpen, className } = props;
  const { t } = useTranslation();

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isOpen ? ref.current.focus() : ref.current.blur();
  }, [isOpen]);

  return (
    <form className={classnames(s.LoginForm, [className], {})}>
      <Input label={t("Логин")} placeholder={t("Введите логин")} ref={ref} />
      <Input
        type="password"
        label={t("Пароль")}
        placeholder={t("Введите пароль")}
      />
      <Button variant="primary">{t("Войти")}</Button>
    </form>
  );
};

