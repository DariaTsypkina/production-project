import { RoutePath } from "app/providers/Router/lib/routeConfig";
import { getUserAuthData, userActions } from "entities/User";
import { LoginModal } from "features/AuthByUsername";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classnames } from "shared/lib/classnames/classnames";
import { AppLink } from "shared/ui/AppLink";
import { Button } from "shared/ui/Button";

import s from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleOpenModal = useCallback(() => setIsAuthModal(true), []);
  const handleCloseModal = useCallback(() => setIsAuthModal(false), []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, []);

  if (!authData) {
    return (
      <nav
        className={classnames(s.navbar, [className], {})}
        data-testid="navbar"
      >
        <div className={classnames(s.links, [], {})}>
          <ThemeSwitcher />

          <Button variant="secondary" size="sm" onClick={handleOpenModal}>
            {t("Войти")}
          </Button>
        </div>

        <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
      </nav>
    );
  }

  return (
    <nav className={classnames(s.navbar, [className], {})} data-testid="navbar">
      <div className={classnames(s.links, [], {})}>
        <AppLink to={RoutePath.MAIN}>{t("Главная")}</AppLink>
        <AppLink to={RoutePath.ABOUT}>{t("О сайте")}</AppLink>

        <ThemeSwitcher />

        <Button variant="secondary" size="sm" onClick={handleLogout}>
          {t("Выйти")}
        </Button>
      </div>
    </nav>
  );
};
