import React, { useState } from 'react';
import { RoundedInput } from '../../components/ui/RoundedInput';
import { useNavigate } from 'react-router-dom';
import './EmailPage.scss';
import { isValidEmail } from '../../helpers/validateEmail';
import { RoundedButton } from '../../components/ui/RoundedButton';

export function EmailPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);

  function testEmail() {
    if (isValidEmail(email)) {
      navigate('/thankyou');
    } else {
      setValidEmail(false);
    }
  }

  return (
    <div className="email">
      <h1 className="email__title">
        Enter your email to see how you can grow with Nebula
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <RoundedInput
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!validEmail && (
          <p className="email__error">Please enter a valid email</p>
        )}
        <p className="email__subtitle">
          *Nebula does not share any personal information. We&apos;ll email you
          a copy of your program for convenient access.
        </p>
        <p className="email__privacy">
          By continuing I agree with{' '}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://asknebula.com/app/privacy-policy"
            className="email__privacy--link"
          >
            Privacy policy
          </a>{' '}
          and{' '}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://asknebula.com/app/terms"
            className="email__privacy--link"
          >
            Terms of use
          </a>
          .
        </p>
        <RoundedButton
          fontSize="18px"
          withBackground
          onClick={testEmail}
          size={'medium'}
        >
          Continue
        </RoundedButton>
      </form>
    </div>
  );
}
