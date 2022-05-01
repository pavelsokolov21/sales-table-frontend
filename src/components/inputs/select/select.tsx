import { ChangeEvent, FC } from "react";

export interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  name: string;
  value: string;
  isRequired?: boolean;
  onChange: (event: ChangeEvent<any>) => void;
}

export const Select: FC<Props> = ({
  options,
  name,
  onChange,
  value,
  isRequired,
}) => (
  <select name={name} value={value} onChange={onChange} required={isRequired}>
    {options.map(({ label, value }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);
