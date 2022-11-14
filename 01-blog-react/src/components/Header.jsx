import styles from './Header.module.css';
import Input from './Input';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <p>Codelândia</p>
        <p>blog</p>
      </div>

      <Input />
    </header>
  );
}

export default Header;
