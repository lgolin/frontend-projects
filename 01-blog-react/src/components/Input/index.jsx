import styles from './Input.module.scss';
import { MagnifyingGlass } from 'phosphor-react';

export default function Input() {
  return (
    <div className={styles.containerInput}>
      <MagnifyingGlass size={24} className={styles.icon} />
      <input type="text" placeholder="Pesquisar no blog" />
    </div>
  );
}
