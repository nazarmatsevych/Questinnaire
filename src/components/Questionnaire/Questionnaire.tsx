import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { answerQuestion } from '../../features/questionsSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { RoundedButton } from '../ui/RoundedButton';
import {
  setIsSingle,
  setIsParent,
  setDecision,
} from '../../features/userSlice';
import { calculateAge } from '../../helpers/getPersonAge';
import { Answer } from '../../types/Question';
import { questions } from '../../database/questions';
import './Questionnaire.scss';

export const Questionnaire: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { gender, dateOfBirth, isSingle, isParent } = useAppSelector(
    (state) => state.user,
  );

  const MAX_QUESTION_ID = 7;

  const age = calculateAge(dateOfBirth);

  const { id = 1 } = useParams<{ id: string }>();

  const { currentQuestionId } = useAppSelector((state) => state.answers);

  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  const handleNext = (answer: Answer) => {
    dispatch(answerQuestion(answer));
    switch (answer.screenId) {
      case 1:
        dispatch(setIsSingle(answer.text === 'Single'));
        break;
      case 2:
      case 3:
        dispatch(setIsParent(answer.text === 'Yes'));
        break;
      case 6:
        dispatch(setDecision(answer.text));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    currentQuestionId !== MAX_QUESTION_ID
      ? navigate(`/question/${currentQuestionId}`)
      : navigate('/decision');
  }, [currentQuestionId, navigate]);

  return (
    <div className="questionnaire">
      <h1 className="questionnaire__title">
        {(+id === 4 || +id === 5) && (
          <p>
            {isSingle && 'Single'} {gender}, {age} y.o.{' '}
          </p>
        )}
        {isParent && +id === 4 && (
          <p>
            who have children need a slightly different approach to find their
            perfect partner.
          </p>
        )}

        {+id === 5 && isParent && (
          <p>
            who have children need a slightly different approach to improve
            their relationship.
          </p>
        )}
        {currentQuestion?.text}
      </h1>
      <div className="questionnaire__btns-wrapper">
        {currentQuestion?.answers.map((answer) => (
          <RoundedButton
            key={answer.id}
            size={'large'}
            onClick={() => handleNext(answer)}
          >
            {answer.text}
          </RoundedButton>
        ))}
      </div>
    </div>
  );
};
