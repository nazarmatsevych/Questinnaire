import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HeartAndHead } from '../../assets/images/heardandhead.svg';
import { ReactComponent as Head } from '../../assets/images/head.svg';
import { ReactComponent as Heart } from '../../assets/images/heart.svg';
import { moveBack, setCurrentId } from '../../features/questionsSlice';
import './Decision.scss';
import { RoundedButton } from '../ui/RoundedButton';

export const Decision = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { zodiac, decision } = useAppSelector((state) => state.user);

  const handleBack = () => {
    dispatch(setCurrentId(6));
    dispatch(moveBack());
    navigate('/question/6');
  };

  useEffect(() => {
    document.body.classList.add('body-with-gradient');
    return () => {
      document.body.classList.remove('body-with-gradient');
    };
  }, []);

  return (
    <div className="decision">
      {decision === 'Heart' && (
        <>
          <div className="decision__image">{<Heart />}</div>
          <h2 className="decision__title">
            Based on our data, 49% of{' '}
            <span className="decision__zodiac">{zodiac}</span> people also make
            decisions with their heart. But don&apos;`t worry, we&apos;`ll
            consider that while creating your guidance plan.
          </h2>
        </>
      )}

      {decision === 'Both' && (
        <>
          <div className="decision__image">{<HeartAndHead />}</div>
          <h2 className="decision__title">
            Wonderful! Based on our data, only the top 17% of{' '}
            <span className="decision__zodiac">{zodiac}</span> people make
            decisions with their heart and head. Using both in equal measure is
            the key to feeling harmonious in your relationships.
          </h2>
        </>
      )}

      {decision === 'Head' && (
        <>
          <div className="decision__image">{<Head />}</div>
          <h2 className="decision__title">
            Based on our data, 39% of{' '}
            <span className="decision__zodiac">{zodiac}</span> people also make
            decisions with their head. But don&apos;`t worry, we&apos;`ll
            consider that while creating your guidance plan.
          </h2>
        </>
      )}

      <div className="decision__buttons-wrapper">
        <RoundedButton
          fontSize="18px"
          textColor="#FBFBFF"
          onClick={handleBack}
          size={'medium'}
        >
          Back
        </RoundedButton>{' '}
        <RoundedButton
          isWhiteText
          textColor="#6A3AA2"
          fontSize="18px"
          withWhiteBackground
          onClick={() => navigate('/email')}
          size={'medium'}
        >
          Next
        </RoundedButton>
      </div>
    </div>
  );
};
