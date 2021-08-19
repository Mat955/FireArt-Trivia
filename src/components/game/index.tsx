import React from 'react';
import styles from './styles/game.module.scss';
import { ApiData } from '../../store/slice/questionSlice';

interface Props {
  game: ApiData[],
  number: number,
}

const GameForm: React.FunctionComponent<Props> = (props: Props) => {
  const { game, number } = props;

  function resultPercent(): number {
    return Math.floor((100 * number) / game.length);
  }

  return (
    <div className={styles.game}>
      <div className={styles.game__title}>
        <h2>{game[number].category}</h2>
        <h3>Level: {game[number].difficulty}</h3>
      </div>
      <div className={styles.game__percent}>
        <h2>
          <span>{number}</span>
          /
          {game.length}
        </h2>
        <div className={styles.game__percent_line}>
          <div className={styles.game__percent_result} style={{ width: `${String(resultPercent())}%` }} />
        </div>
      </div>
      <div className={styles.game__questions}>
        <p dangerouslySetInnerHTML={{ __html: game[number].question }}></p>
      </div>
    </div>
  )
}

export default GameForm;