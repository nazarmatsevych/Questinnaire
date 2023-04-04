import React, { FC, ChangeEvent } from 'react';
import './RoundedInput.scss';

interface Props {
  type?: string;
  placeholder?: string;
  value: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RoundedInput: FC<Props> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <input
      className="rounded-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};
