import Logo from '../../assets/images/logo/logo.png'
import styles from './styles/header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Welcome to the</h1>
      <img src={Logo} alt="logo trivia" className={styles.header__logo} />
    </div>
  )
}