import { configureStore } from '@reduxjs/toolkit';
import { answerSlice } from './slice/answerSlice';
import { questionSlice } from './slice/questionSlice';
import { gameStageSlice } from './slice/gameSlice';

export const store = configureStore({
  reducer: {
    answers: answerSlice.reducer,
    question: questionSlice.reducer,
    stage: gameStageSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
