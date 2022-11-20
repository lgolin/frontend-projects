import styles from './Input.module.scss';

export default function Input() {
  return (
    <div className={styles.containerInput}>
      <input type="text" placeholder="Pesquise aqui" />
    </div>
  );
}
