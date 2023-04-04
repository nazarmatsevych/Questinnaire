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

  const age = calculateAge(dateOfBirth);

  const { id = 1 } = useParams<{ id: string }>();

  const currentQuestionIdNew = parseInt(String(id), 10);

  const currentQuestion = useAppSelector((state) => {
    const question = questions.find((q) => q.id === currentQuestionIdNew);
    if (question === null || question === undefined)
      throw new Error('Questionnaire not found');
    return question;
  });

  const { currentQuestionId } = useAppSelector((state) => state.answers);

  const handleNext = (answer: Answer) => {
    if (answer.text === 'Single' && answer.screenId === 1) {
      dispatch(setIsSingle(true));
    } else if (answer.text !== 'Single' && answer.screenId === 1) {
      dispatch(setIsSingle(false));
    }

    if (
      (answer.screenId === 2 && answer.text === 'Yes') ||
      (answer.screenId === 3 && answer.text === 'Yes')
    ) {
      dispatch(setIsParent(true));
    } else if (
      (answer.screenId === 2 && answer.text === 'No') ||
      (answer.screenId === 3 && answer.text === 'No')
    ) {
      dispatch(setIsParent(false));
    }

    if (answer.screenId === 6 && answer.text === 'Heart') {
      dispatch(setDecision('Heart'));
    } else if (answer.screenId === 6 && answer.text === 'Head') {
      dispatch(setDecision('Head'));
    } else if (answer.screenId === 6 && answer.text === 'Both') {
      dispatch(setDecision('Both'));
    }
    dispatch(answerQuestion(answer));
  };

  useEffect(() => {
    +currentQuestionId <= 6
      ? navigate(`/question/${currentQuestionId}`)
      : navigate('/decision');
  }, [currentQuestionId]);

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
        {currentQuestion.text}
      </h1>
      <div className="questionnaire__btns-wrapper">
        {currentQuestion.answers.map((answer) => (
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
