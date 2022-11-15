import styles from './Input.module.css';
import { MagnifyingGlass } from 'phosphor-react';

function Input() {
  return (
    <section className={styles.wrapper}>
      <MagnifyingGlass size={20} className={styles.icon} />
      <input type="text" placeholder="Pesquisar no blog" />
    </section>
  );
}

export default Input;
