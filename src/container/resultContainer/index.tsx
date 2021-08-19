import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './styles/resultContainer.module.scss';
import avatar from '../../assets/images/icons/avatar.png';
import { Results } from '../../store/slice/questionSlice';
import AnswerList from '../../components/resultsList/index';
import ButtonExit from '../../components/buttonExit';

export default function ResultContainer() {
  const answers = useSelector((state: RootState) => state.answers.answers);
  const game = useSelector((state: RootState) => state.question.results);

  let correctAnswers = 0;

  let resultsAnswers: Array<Results> = [];

  answers.filter((item, i) => {
    return (game[i].correct_answer).toLowerCase() === String(item)
      ? resultsAnswers.push({ question: game[i].question, answer: true }) && correctAnswers++
      : resultsAnswers.push({ question: game[i].question, answer: false });
  });

  const handleRestart = () => {
    window.location.reload();
    resultsAnswers = [];
  }

  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultContainer__score}>
        <img src={avatar} alt="avatar user" />
        <h2>
          You scored
          <span> {correctAnswers}</span>  / {answers.length}
        </h2>
      </div>
      <div className={styles.resultContainer__answerQuestions}>
        {resultsAnswers.map((single, key: number) => {
          return (
            <AnswerList
              key={key}
              answer={single.answer}
              question={single.question}
            />
          )
        })}
      </div>
      <ButtonExit />
      <button className={styles.resultContainer__button} type="button" onClick={handleRestart}>Play again</button>
    </div>
  )
}