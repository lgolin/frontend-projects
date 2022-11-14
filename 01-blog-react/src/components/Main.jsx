import styles from './Main.module.css';
import Post from './Post.jsx';

function Main() {
  return (
    <section className={styles.post}>
      <Post />
    </section>
  );
}

export default Main;
