import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { questions } from '../database/questions';
import { Answer } from '../types/Question';

interface SurveyState {
  currentQuestionId: number | string;
  answers: Answer[];
  nextQuestionId: number | string;
}

const initialState: SurveyState = {
  currentQuestionId: questions[0].id,
  answers: [],
  nextQuestionId: 1,
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setCurrentId: (state, action: PayloadAction<number | string>) => {
      state.currentQuestionId = action.payload;
    },
    answerQuestion: (state, action: PayloadAction<Answer>) => {
      const existingAnswerIndex = state.answers.findIndex(
        (answer) => answer.screenId === action.payload.screenId,
      );

      if (existingAnswerIndex === -1) {
        state.answers.push(action.payload);
      } else {
        state.answers.splice(existingAnswerIndex, 1, action.payload);
      }

      state.currentQuestionId = action.payload.nextQuestionId;
    },
  },
});

export const { answerQuestion, setCurrentId } = surveySlice.actions;

export default surveySlice.reducer;
