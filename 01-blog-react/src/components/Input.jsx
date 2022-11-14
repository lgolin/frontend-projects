import styles from './Input.module.css';
import { MagnifyingGlass } from 'phosphor-react';

function Input() {
  return (
    <section className={styles.input}>
      <input type="text" placeholder="Pesquisar no blog" />
    </section>
  );
}

export default Input;
