import React, { FC, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { moveBack, setCurrentId } from '../../features/questionsSlice';
import { ReactComponent as ArrowBlack } from '../../assets/images/backArrowBlack.svg';
import { ReactComponent as ArrowWhite } from '../../assets/images/backArrowWhite.svg';
import './ArrowBack.scss';

interface Props {
  isWhite?: boolean;
}

export const ArrowBack: FC<Props> = ({ isWhite }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { currentQuestionId } = useAppSelector((state) => state.answers);

  const handleNavigateBack = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      switch (location.pathname) {
        case '/question/1':
          navigate('/date');
          break;
        case '/date':
          navigate('/');
          break;
        case '/decision':
          dispatch(moveBack());
          dispatch(setCurrentId(6));
          navigate('/question/6');
          break;
        case `/question/${currentQuestionId}`:
          dispatch(moveBack());
          break;
        default:
          navigate(-1);
          break;
      }
    },
    [location.pathname, navigate, dispatch],
  );

  return (
    <div
      className="arrow-back"
      onClick={handleNavigateBack}
      aria-label="Go back"
    >
      {isWhite ? (
        <ArrowWhite style={{ cursor: 'pointer' }} />
      ) : (
        <ArrowBlack style={{ cursor: 'pointer' }} />
      )}
    </div>
  );
};
