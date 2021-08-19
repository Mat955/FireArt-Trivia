import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface QuestionResponse {
  results: ApiData[];
};

export interface ApiData {
  category: string,
  type: string;
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answer: [string],
}

export interface Results {
  question: string,
  answer: boolean,
}

const initialState: QuestionResponse = {
  results: [{
    category: '',
    type: '',
    difficulty: '',
    question: '',
    correct_answer: '',
    incorrect_answer: [''],
  }],
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<ApiData[]>) => {
      state.results = [];
      action.payload.map(data => {
        state.results.push(data);
        return data;
      });
    },
  },
});

export const { getData } = questionSlice.actions;

export default questionSlice.reducer;