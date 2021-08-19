import React from 'react';
import { Results } from '../../store/slice/questionSlice';
import styles from './styles/resultsList.module.scss'
import { ReactComponent as Tick } from '../../assets/images/icons/tick.svg';
import { ReactComponent as Cross } from '../../assets/images/icons/cross.svg';

export default function ResultsList(param: Results): React.FunctionComponent<Results> {
  const { question, answer } = param;

  const checkAnswerColor = () => {
    return answer ? styles.results : styles.results_wrong;
  }

  return (
    <div className={checkAnswerColor()}>
      <div className={styles.results__question}><h4 dangerouslySetInnerHTML={{ __html: question }}></h4></div>
      {answer && <Tick />}
      {!answer && <Cross />}
    </div >
  )
}