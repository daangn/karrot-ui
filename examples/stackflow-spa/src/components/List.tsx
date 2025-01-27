import IconChevronRightFill from "@daangn/react-monochrome-icon/IconChevronRightFill";
import type React from "react";
import * as styles from "./List.css";
import { forwardRef } from "react";

export function List({ children, ...otherProps }: React.PropsWithChildren<{}>) {
  return (
    <div className={styles.root} {...otherProps}>
      {children}
    </div>
  );
}

interface ListItemProps {
  title: string;
  onClick?: () => void;
}

export const ListItem = forwardRef<HTMLButtonElement, ListItemProps>((props, ref) => {
  const { title, onClick, ...otherProps } = props;

  return (
    <button ref={ref} type="button" className={styles.item} onClick={onClick} {...otherProps}>
      <div className={styles.title}>{title}</div>
      <div>
        <IconChevronRightFill className={styles.icon} />
      </div>
    </button>
  );
});
ListItem.displayName = "ListItem";
