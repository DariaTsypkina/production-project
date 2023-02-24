import { RoutePath } from "app/providers/Router/lib/routeConfig";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classnames } from "shared/lib/classnames/classnames";
import { AppLink } from "shared/ui/AppLink";
import { Button } from "shared/ui/Button";
import { Modal } from "shared/ui/Modal";

import s from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const toggleIsAuthModal = useCallback(
    () => setIsAuthModal((state) => !state),
    []
  );

  return (
    <nav className={classnames(s.navbar, [className], {})} data-testid="navbar">
      <div className={classnames(s.links, [], {})}>
        <AppLink to={RoutePath.MAIN}>{t("Главная")}</AppLink>
        <AppLink to={RoutePath.ABOUT}>{t("О сайте")}</AppLink>

        <ThemeSwitcher />

        <Button variant="secondary" size="sm" onClick={toggleIsAuthModal}>
          {t("Войти")}
        </Button>
      </div>

      <Modal isOpen={isAuthModal} onClose={toggleIsAuthModal}>
        {/* eslint-disable-next-line */}
        {/* eslint-disable-next-line */}
        some content
      </Modal>
    </nav>
  );
};

