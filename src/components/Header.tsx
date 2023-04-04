import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as LogoWhite } from '../assets/images/logo_white.svg';
import React, { FC } from 'react';

interface Props {
  isWhite?: boolean;
}

export const Header: FC<Props> = ({ isWhite }) => {
  return (
    <header>{isWhite ? <LogoWhite /> : <Logo aria-label="logo" />}</header>
  );
};
