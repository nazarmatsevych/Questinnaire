import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  gender: string;
  dateOfBirth: string;
  zodiac: string;
  isSingle: boolean;
  isParent: boolean;
  decision: string;
}

const initialState: UserState = {
  gender: '',
  dateOfBirth: '',
  zodiac: '',
  isSingle: false,
  isParent: false,
  decision: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDecision: (state, action) => {
      state.decision = action.payload;
    },
    setIsParent: (state, action) => {
      state.isParent = action.payload;
    },
    setIsSingle: (state, action) => {
      state.isSingle = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setDateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload;
    },
    setZodiac: (state, action) => {
      state.zodiac = action.payload;
    },
  },
});

export const {
  setGender,
  setDateOfBirth,
  setZodiac,
  setIsSingle,
  setIsParent,
  setDecision,
} = userSlice.actions;

export default userSlice.reducer;
