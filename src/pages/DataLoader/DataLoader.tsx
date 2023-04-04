import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setZodiac } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';
import { getZodiacSign } from '../../helpers/getPersonZodiac';
import './DataLoader.scss';

export function DataLoader() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { dateOfBirth, gender } = useAppSelector((state) => state.user);
  const date = new Date(dateOfBirth);
  const zodiac = getZodiacSign(date);

  if (zodiac) {
    dispatch(setZodiac(zodiac));
  }

  useEffect(() => {
    setTimeout(() => {
      navigate('/question/1');
    }, 3000);
  }, []);

  useEffect(() => {
    document.body.classList.add('body-with-gradient');
    return () => {
      document.body.classList.remove('body-with-gradient');
    };
  }, []);

  return (
    <div className="data-loader">
      <h1 className="data-loader__title">
        We&apos;ve helped 2,865,756* other{' '}
        <span className="data-loader__zodiac">{zodiac}</span> {gender} to find
        their perfect partner and we can&apos;t wait to help you too!
      </h1>
      <p className="data-loader__subtitle">*as of 24 February 2023 </p>
      <p className="data-loader__info">Connecting to database...</p>
    </div>
  );
}
