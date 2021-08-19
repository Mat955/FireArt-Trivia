import React from 'react';
import { ReactComponent as VectorExit } from '../../assets/images/icons/cross-exit.svg';
import styles from './styles/buttonExit.module.scss';

export default function ButtonExit() {

  const handleExit = () => {
    window.location.reload();
  }

  return (
    <div className={styles.game__button_exit} >
      <button type="button" onClick={handleExit}><VectorExit /></button>
    </div>
  )
}