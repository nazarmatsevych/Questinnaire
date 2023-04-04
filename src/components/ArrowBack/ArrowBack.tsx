import React, { FC, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as ArrowBlack } from '../../assets/images/backArrowBlack.svg';
import { ReactComponent as ArrowWhite } from '../../assets/images/backArrowWhite.svg';
import './ArrowBack.scss';

interface Props {
  isWhite?: boolean;
}

export const ArrowBack: FC<Props> = ({ isWhite }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateBack = useCallback(() => {
    if (location.pathname === '/question/1') {
      navigate('/date');
    } else if (location.pathname === '/date') {
      navigate('/');
    } else {
      navigate(-1);
    }
  }, [location.pathname, navigate]);
  return (
    <div className="arrow-back" onClick={handleNavigateBack}>
      {isWhite ? (
        <ArrowWhite style={{ cursor: 'pointer' }} />
      ) : (
        <ArrowBlack style={{ cursor: 'pointer' }} />
      )}
    </div>
  );
};
