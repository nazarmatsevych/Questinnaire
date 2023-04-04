import { Question } from '../types/Question';

export const questions: Question[] = [
  {
    id: 1,
    text: 'So we can get to know you better, tell us about your relationship status.',
    answers: [
      { id: 1, text: 'Single', nextQuestionId: 2, screenId: 1 },
      { id: 2, text: 'In a relationship', nextQuestionId: 3, screenId: 1 },
    ],
  },
  {
    id: 2,
    text: 'Are you a single parent?',
    answers: [
      { id: 1, text: 'Yes', nextQuestionId: 4, screenId: 2 },
      { id: 2, text: 'No', nextQuestionId: 4, screenId: 2 },
    ],
  },
  {
    id: 3,
    text: 'Are you parent?',
    answers: [
      { id: 1, text: 'Yes', nextQuestionId: 5, screenId: 3 },
      { id: 2, text: 'No', nextQuestionId: 5, screenId: 3 },
    ],
  },
  {
    id: 4,
    text: 'But first, how did you feel in your last relationship?',
    answers: [
      {
        id: 1,
        text: 'I was unhappy with low things were going in my relationship',
        nextQuestionId: 6,
        screenId: 4,
      },
      {
        id: 2,
        text: 'I was unhappy with parts of my relationship, but some thing were working',
        nextQuestionId: 6,
        screenId: 4,
      },
      {
        id: 3,
        text: 'I was generally happy with my relationship',
        nextQuestionId: 6,
        screenId: 4,
      },
      {
        id: 4,
        text: 'I’ve never been in a relationship',
        nextQuestionId: 4,
        screenId: 4,
      },
    ],
  },
  {
    id: 5,
    text: 'Which statement best describes you?',
    answers: [
      {
        id: 1,
        text: 'I’m very unhappy with how things are going in my relationship',
        nextQuestionId: 6,
        screenId: 5,
      },
      {
        id: 2,
        text: 'I’m unhappy with parts of my relationship, but some things are working well',
        nextQuestionId: 6,
        screenId: 5,
      },
      {
        id: 3,
        text: 'I’m generally happy in my relationship',
        nextQuestionId: 6,
        screenId: 5,
      },
    ],
  },
  {
    id: 6,
    text: 'Do you make decisions with your head or your heart?',
    answers: [
      { id: 1, text: 'Heart', nextQuestionId: 7, screenId: 6 },
      { id: 2, text: 'Head', nextQuestionId: 7, screenId: 6 },
      { id: 3, text: 'Both', nextQuestionId: 7, screenId: 6 },
    ],
  },
];
