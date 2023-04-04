import React, { FC } from 'react';
import './RoundedSelect.scss';

interface Props {
  options: string[] | number[];
  title: string;
  value: string | number;
  onChange: (value: string | number) => void;
}

export const RoundedSelect: FC<Props> = ({
  options,
  title,
  value,
  onChange,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="rounded-select">
      <select value={value} onChange={handleSelectChange}>
        <option
          className="rounded-select__placeholder"
          value=""
          disabled
          hidden
        >
          {title}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="rounded-select__arrow"></span>
    </div>
  );
};
