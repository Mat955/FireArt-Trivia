import React, { useState } from 'react';
import GameForm from '../../components/game';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { putNewAnswer } from '../../store/slice/answerSlice';
import ButtonExit from '../../components/buttonExit';
import styles from './styles/gameContainer.module.scss';

export default function Game() {
  const [number, setNumber] = useState(0);
  const game = useSelector((state: RootState) => state.question.results);
  const dispatch = useDispatch();

  function handleClick(type: boolean) {
    setNumber(number + 1);
    dispatch(putNewAnswer(type));
  };


  return (
    <>
      <div className={styles.game}>
        <GameForm game={game} number={number} />
        <ButtonExit />
        <button type="button" onClick={() => handleClick(true)} className={styles.game__button}>True</button>
        <button type="button" onClick={() => handleClick(false)} className={styles.game__button}>False</button>
      </div>
    </>
  )
};