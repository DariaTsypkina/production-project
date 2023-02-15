import { FC, useState } from "react";

import { classnames } from "shared/lib/classnames/classnames";

import Burger from "shared/assets/icons/burger.svg";
import { Button } from "shared/ui/Button";
import s from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;

  const [collapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => setIsCollapsed((state) => !state);

  return (
    <aside
      className={classnames(s.sidebar, [className], {
        [s.collapsed]: !collapsed,
      })}
    >
      <Button onClick={toggleCollapsed}>
        <Burger />
      </Button>
    </aside>
  );
};

