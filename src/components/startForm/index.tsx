import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { ReactComponent as Difficulty } from '../../assets/images/icons/difficulty.svg';
import { ReactComponent as Amount } from '../../assets/images/icons/amount.svg';
import styles from './styles/startForm.module.scss';
import { getData } from "../../store/slice/questionSlice";
import { QuestionResponse } from "../../store/slice/questionSlice";
import { ApiTrivia } from '../../utils/api';


export default function StartForm() {
  const [amount, setAmount] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const dispatch = useDispatch();

  const isInvalid = difficulty === '' || amount === '' || amount === '0';
  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`;

  const handleLoadData = () => {
    ApiTrivia<QuestionResponse>(url)
      .then(({ results }) => {
        dispatch(getData(results))
      });
  };

  return (
    <div className={styles.form}>
      <div className={styles.form__group}>
        <div className={styles.form__row}>
          <Difficulty />
          <span>Difficulty</span>
        </div>
        <select
          onChange={e => setDifficulty(e.target.value)}
          className={styles.form__select}
        >
          <option value="easy">Easy</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className={styles.form__group}>
        <div className={styles.form__row}>
          <Amount />
          <span>Amount</span>
        </div>
        <input
          type="number"
          max="15"
          onChange={e => setAmount(e.target.value)}
        />
      </div>
      <div className={styles.form__group}>
        <button disabled={isInvalid} type="button" onClick={handleLoadData}>Start</button>
      </div>
    </div>
  );
};