import { FC, memo, useState } from "react";

import { classnames } from "shared/lib/classnames/classnames";

import { Button } from "shared/ui/Button";
import { LangSwitcher } from "features/LangSwitcher";

import BurgerIcon from "shared/assets/icons/burger.svg";

import s from "./Sidebar.module.scss";
import { SidebarItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
  const { className } = props;

  const [collapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => setIsCollapsed((state) => !state);

  return (
    <aside
      data-testid="sidebar"
      className={classnames(s.sidebar, [className], {
        [s.collapsed]: collapsed,
      })}
    >
      <Button onClick={toggleCollapsed} className={s.burgerButton}>
        <BurgerIcon />
      </Button>

      {SidebarItemsList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      ))}

      <LangSwitcher />
    </aside>
  );
});

