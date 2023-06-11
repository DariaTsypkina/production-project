import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { FC, FormEvent, memo, useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { classnames } from "shared/lib/classnames/classnames";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { Typography } from "shared/ui/Typography";
import s from "./LoginForm.module.scss";
import {
  ReducersList,
  useDynamicModuleLoader,
} from "shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
  isOpen: boolean;
  onSuccess?: () => void;
  className?: string;
}

const reducers: ReducersList = {
  loginForm: loginReducer,
};

const _LoginForm: FC<LoginFormProps> = (props) => {
  const { isOpen, onSuccess, className } = props;
  const { t } = useTranslation();

  useDynamicModuleLoader({ reducers });

  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const handleChangeUsername = useCallback(
    (value: string) => dispatch(loginActions.setUsername(value)),
    [dispatch]
  );
  const handleChangePassword = useCallback(
    (value: string) => dispatch(loginActions.setPassword(value)),
    [dispatch]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await dispatch(loginByUsername({ username, password }));
      result.meta.requestStatus === "fulfilled" && onSuccess?.();
    },
    [onSuccess, dispatch, username, password]
  );

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

const LoginForm = memo(_LoginForm);

export default LoginForm;
