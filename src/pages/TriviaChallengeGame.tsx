import React from 'react';
import * as ROUTES from '../constants/routes';
import { Home, Game, Results } from './';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function TriviaChallengeGame() {
  const currentStage = useSelector((state: RootState) => state.stage.stage);
  const answers = useSelector((state: RootState) => state.answers);
  const apiData = useSelector((state: RootState) => state.question);
  const resultsView = apiData.results.length === answers.answers.length;

  const checkResult = () => (resultsView === true ? (displayedPage = <Results />) : null);

  let displayedPage;

  switch (currentStage) {
    case ROUTES.SET_GAME:
      displayedPage = <Home />;
      break;
    case ROUTES.START_GAME:
      displayedPage = <Game />;
      break;
    default:
      break;
  }
  checkResult();

  return (
    <>
      {displayedPage}
    </>
  );
};

// const apiData = useSelector((state: RootState) => state.question);
// const startView = apiData.results.map(item => item.category.length);
// const gameView = answers.answers.length !== apiData.results.length && apiData.results.length > 1;
// const resultsView = apiData.results.length === answers.answers.length;