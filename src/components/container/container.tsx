import { ReactNode, FC } from "react";
import cn from "classnames";
import classes from "./container.module.scss";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container: FC<Props> = ({ children, className = "" }) => (
  <div className={cn(classes.container, className)}>{children}</div>
);
