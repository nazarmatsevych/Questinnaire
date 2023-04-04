import React, { FC } from 'react';
import './Footer.scss';

interface Props {
  isWhite?: boolean;
}

export const Footer: FC<Props> = ({ isWhite }) => {
  return (
    <div className="footer">
      <p
        className={
          isWhite ? 'footer__title footer__title--white' : 'footer__title'
        }
      >
        Nicosia, Cyprus
      </p>
    </div>
  );
};
