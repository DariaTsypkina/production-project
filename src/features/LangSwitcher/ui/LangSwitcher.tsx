import { ButtonHTMLAttributes, FC, memo } from "react";

import { classnames } from "shared/lib/classnames/classnames";
import { useTranslation } from "react-i18next";

import RusIcon from "shared/assets/icons/rus.svg";
import EngIcon from "shared/assets/icons/eng.svg";
import s from "./LangSwitcher.module.scss";

interface LangSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo((props) => {
  const { className } = props;

  const { i18n } = useTranslation();

  const toggleLang = () =>
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

  return (
    <button
      onClick={toggleLang}
      className={classnames(s.switcher, [className])}
    >
      {i18n.language === "ru" ? <RusIcon /> : <EngIcon />}
    </button>
  );
});

