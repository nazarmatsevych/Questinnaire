import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { questions } from '../database/questions';
import { Answer } from '../types/Question';

interface SurveyState {
  currentQuestionId: number | string;
  answers: Answer[];
  nextQuestionId: number | string;
  screenHistory: Array<number | string>;
}

const initialState: SurveyState = {
  currentQuestionId: questions[0].id,
  answers: [],
  nextQuestionId: 1,
  screenHistory: [],
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

      state.screenHistory.push(state.currentQuestionId);
      state.currentQuestionId = action.payload.nextQuestionId;
    },

    moveBack: (state) => {
      if (state.screenHistory.length > 0) {
        const previousQuestionId = state.screenHistory.pop();
        if (previousQuestionId !== undefined) {
          state.currentQuestionId = previousQuestionId;
        }
      }
    },
  },
});

export const { answerQuestion, setCurrentId, moveBack } = surveySlice.actions;

export default surveySlice.reducer;
