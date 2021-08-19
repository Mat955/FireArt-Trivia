import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface triviaAnswer {
  answers: Array<boolean>,
};

const initialState: triviaAnswer = {
  answers: [],
};

export const answerSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    putNewAnswer: (state, action: PayloadAction<boolean>) => {
      state.answers.push(action.payload);
    },
  },
});

export const { putNewAnswer } = answerSlice.actions;

export default answerSlice.reducer;