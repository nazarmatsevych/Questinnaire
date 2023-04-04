import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setGender } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';
import './Gender.scss';
// import { RoundedInput } from '../../components/ui/RoundedInput';

import { ReactComponent as MaleCard } from '../../assets/images/male_gender.svg';
import { ReactComponent as FemaleCard } from '../../assets/images/female_gender.svg';
import { ReactComponent as MaleButton } from '../../assets/images/male_button.svg';
import { ReactComponent as FemaleButton } from '../../assets/images/female_button.svg';

export function Gender() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSelectGender = (gender: string) => {
    dispatch(setGender(gender));
    navigate('/date');
  };

  return (
    <div className="gender">
      <h1 className="gender__title">
        Understand Yourself and Improve Relationships With Astrology
      </h1>
      <h2 className="gender__subtitle">1-Minute Personal Assessment</h2>
      <p className=" gender__question">Select your gender:</p>
      <div className="gender__images-wrapper">
        <div className="gender__images">
          <MaleCard aria-label="male gender image" />
          <FemaleCard aria-label="female gender image" />
        </div>

        <div className="gender__buttons">
          <div className="gender__btn gender__btn--male">
            <MaleButton
              onClick={() => handleSelectGender('Male')}
              aria-label="male gender button"
            />
          </div>
          <div className="gender__btn">
            <FemaleButton
              onClick={() => handleSelectGender('Female')}
              aria-label="female gender button"
            />
          </div>
        </div>
      </div>

      <footer className="gender__footer">
        <p className="gender__footer-text">
          By continuing I agree with{' '}
          <span className="gender__footer-decorated-text">Privacy policy</span>{' '}
          and{' '}
          <span className="gender__footer-decorated-text">Terms of use</span>.
        </p>
        <p className="gender__footer-text">
          Obrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012, Nicosia,
          Cyprus
        </p>
      </footer>
    </div>
  );
}
