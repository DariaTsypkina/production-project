import { FC, useState } from "react";

import s from "./Sidebar.module.scss";

import { classnames } from "shared/lib/classnames/classnames";
import { Button } from "shared/ui";
import Burger from "shared/assets/icons/burger.svg";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;

  const [collapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => setIsCollapsed((state) => !state);

  return (
    <aside
      className={classnames(s.sidebar, { [s.collapsed]: !collapsed }, [
        className,
      ])}
    >
      <Button onClick={toggleCollapsed}>
        <Burger />
      </Button>
    </aside>
  );
};

