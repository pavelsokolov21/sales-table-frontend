import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";

interface Props {
  type?: HTMLInputTypeAttribute;
  value: string | number;
  name: string;
  placeholder?: string;
  isRequired?: boolean;
  onChange: (event: ChangeEvent<any>) => void;
}

export const Input: FC<Props> = ({
  type = "text",
  onChange,
  value,
  placeholder,
  name,
  isRequired,
}) => (
  <input
    name={name}
    type={type}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    required={isRequired}
  />
);
