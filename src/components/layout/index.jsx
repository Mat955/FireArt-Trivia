import React from 'react';
import styles from './styles/layout.module.scss';
import { ReactComponent as VectorLeft1 } from '../../assets/images/background/home/vector-1-left.svg';
import { ReactComponent as VectorLeft2 } from '../../assets/images/background/home/vector-2-left.svg';
import { ReactComponent as VectorRight1 } from '../../assets/images/background/home/vector-1-right1.svg';
import { ReactComponent as VectorRight2 } from '../../assets/images/background/home/vector-2-right.svg';
import { ReactComponent as Vector2Left } from '../../assets/images/background/game/vector-3-left.svg';
import { ReactComponent as Vector2LeftBottom } from '../../assets/images/background/game/vector-4-left.svg';
import { ReactComponent as Vector2RightBottom } from '../../assets/images/background/game/vector-4-right.svg';


interface LayoutType {
  main: string,
  secondary: string,
}

interface LayoutProps {
  select: LayoutType,
  children: React.ReactNode
}

export default function Layout({ select, children }: LayoutProps) {

  return (
    <>
      {select === 'main' ? (
        <div className={`${styles[select]} ${styles.layout}`}>
          <VectorLeft1 className={styles.layout__vector} />
          <VectorLeft2 className={styles.layout__vector} />
          <VectorRight1 className={styles.layout__vector} />
          <VectorRight2 className={styles.layout__vector} />
          <div className={styles.layout__wrapper}>
            {children}
          </div>
        </div>
      ) :
        <div className={`${styles[select]} ${styles.layout}`}>
          <Vector2Left className={styles.layout__vector} />
          <Vector2LeftBottom className={styles.layout__vector} />
          <Vector2Left className={styles.layout__vector} />
          <Vector2RightBottom className={styles.layout__vector} />
          <div className={styles.layout__wrapper}>
            {children}
          </div>
        </div>
      }
    </>
  )
}