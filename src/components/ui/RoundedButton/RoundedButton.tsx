import React, { FC } from 'react';
import './RoundedButton.scss';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  withBackground?: boolean;
  withWhiteBackground?: boolean;
  disabled?: boolean;
  textColor?: string;
  fontSize?: string;
  isWhiteText?: boolean;
}

export const RoundedButton: FC<Props> = ({
  onClick,
  size,
  withBackground,
  withWhiteBackground,
  disabled,
  children,
  textColor,
  fontSize,
  isWhiteText,
}) => {
  const buttonStyles = {
    background: withBackground
      ? 'linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%)'
      : withWhiteBackground
      ? '#FBFBFF'
      : 'transparent',
    padding: size === 'small' ? '5px' : '12px 20px',
    width: size === 'small' ? '160px' : size === 'medium' ? '328px' : '330px',
    height: size === 'small' ? '49px' : size === 'medium' ? '49px' : '64px',
    border: '1px solid #E0E0E0',
    borderRadius: '16px',
    cursor: 'pointer',
    boxShadow: '2px 2px 6px rgba(84, 60, 151, 0.25)',
    color: textColor,
    fontSize,
  };

  return (
    <button
      disabled={disabled}
      className="rounded-btn"
      onClick={onClick}
      style={buttonStyles}
    >
      <p
        style={{ fontSize }}
        className={
          !isWhiteText
            ? 'rounded-btn__title'
            : 'rounded-btn__title rounded-btn__title--hover'
        }
      >
        {children}
      </p>
    </button>
  );
};
