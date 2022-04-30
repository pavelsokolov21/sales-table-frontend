import { ComponentType } from "react";

interface Options {
  label: string;
  textClassName?: string;
  labelClassName?: string;
}

export const withLabel =
  <T extends object>(
    Component: ComponentType<T>,
    { label, textClassName = "", labelClassName = "" }: Options
  ) =>
  (props: T) =>
    (
      <label className={labelClassName}>
        <p className={textClassName}>{label}</p>
        <Component {...props} />
      </label>
    );
