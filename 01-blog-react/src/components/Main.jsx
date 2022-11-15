import styles from './Main.module.css';
import Post from './Post';

function Main() {
  return (
    <section className={styles.post}>
      <Post />
    </section>
  );
}

export default Main;
