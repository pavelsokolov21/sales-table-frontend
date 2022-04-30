import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  type: "button" | "reset" | "submit";
}

export const PrimaryButton: FC<Props> = ({ children, type = "button" }) => (
  <button type={type}>{children}</button>
);
