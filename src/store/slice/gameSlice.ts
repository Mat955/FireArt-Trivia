import { createSlice } from "@reduxjs/toolkit";
import * as ROUTES from '../../constants/routes';
import { getData } from './questionSlice';

interface gameStage {
  stage: string,
  answers: [],
};

const initialState: gameStage = {
  stage: ROUTES.SET_GAME,
}

export const gameStageSlice = createSlice({
  name: 'gameStage',
  initialState,
  reducers: {
    setGame: (state) => {
      state.stage = ROUTES.SET_GAME;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData, (state) => {
        state.stage = ROUTES.START_GAME;
      });
  },
});

export const { setGame, endGame } = gameStageSlice.actions;

export default gameStageSlice.reducer;