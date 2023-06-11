import { FC, memo } from "react";

import { classnames } from "shared/lib/classnames/classnames";

import s from "./SidebarItem.module.scss";
import { SidebarItemType } from "../../model/items";
import { AppLink } from "shared/ui/AppLink";
import { useTranslation } from "react-i18next";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
  const { item: { path, text, Icon }, collapsed } = props;

  const { t } = useTranslation();

  return (
    <AppLink to={path} className={s.item} aria-label={t(text)}>
      <Icon />
      <span className={classnames(s.link, [], { [s.collapsed]: collapsed })}>{t(text)}</span>
    </AppLink>
  );
});