import IconChevronRightRegular from "@seed-design/icon/IconChevronRightRegular";
import type React from "react";
import * as styles from "./List.css";

export function List({ children }: React.PropsWithChildren<{}>) {
  return <div className={styles.root}>{children}</div>;
}

interface ListItemProps {
  title: string;
  onClick?: () => void;
}

export function ListItem(props: ListItemProps) {
  const { title, onClick } = props;

  return (
    <button type="button" className={styles.item} onClick={onClick}>
      <div className={styles.title}>{title}</div>
      <div>
        <IconChevronRightRegular className={styles.icon} />
      </div>
    </button>
  );
}
