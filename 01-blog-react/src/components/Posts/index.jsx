import styles from './Posts.module.scss';
import posts from './posts.json';

export default function Posts() {
  return (
    <>
      {posts.map((post) => {
        return (
          <section key={post.id}>
            <div className={styles.info}>
              <p>{post.date}</p>
              <p>heart</p>
            </div>
            <h3>{post.title}</h3>
            <p className={styles.content}>{post.content}</p>
          </section>
        );
      })}
    </>
  );
}
