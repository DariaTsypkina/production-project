import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { FC, FormEvent, memo, useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { classnames } from "shared/lib/classnames/classnames";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { Typography } from "shared/ui/Typography";
import s from "./LoginForm.module.scss";

interface LoginFormProps {
  isOpen: boolean;
  className?: string;
}

const _LoginForm: FC<LoginFormProps> = (props) => {
  const { isOpen, className } = props;
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const handleChangeUsername = useCallback(
    (value: string) => dispatch(loginActions.setUsername(value)),
    [dispatch]
  );
  const handleChangePassword = useCallback(
    (value: string) => dispatch(loginActions.setPassword(value)),
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginByUsername({ username, password }));
  };

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isOpen && ref?.current?.focus();
  }, [isOpen]);

  return (
    <form
      className={classnames(s.LoginForm, [className], {})}
      onSubmit={handleSubmit}
    >
      <Input
        ref={ref}
        label={t("Логин")}
        value={username}
        placeholder={t("Введите логин")}
        onChange={handleChangeUsername}
      />
      <Input
        type="password"
        label={t("Пароль")}
        value={password}
        placeholder={t("Введите пароль")}
        onChange={handleChangePassword}
      />

      {!!error && (
        <Typography color="red-500" level={3}>
          {t("Пользователь не найден")}
        </Typography>
      )}

      <Button variant="primary" disabled={isLoading}>
        {t("Войти")}
      </Button>
    </form>
  );
};

export const LoginForm = memo(_LoginForm);

