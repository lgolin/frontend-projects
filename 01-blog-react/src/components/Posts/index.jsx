import styles from './Posts.module.scss';
import posts from './posts.json';
import { HeartStraight } from 'phosphor-react';

export default function Posts() {
  return (
    <>
      {posts.map((post) => {
        return (
          <section key={post.id}>
            <div className={styles.info}>
              <p>{post.date}</p>
              <p>
                <HeartStraight size={20} color="#574ae8" />
              </p>
            </div>
            <p className={styles.title}>{post.title}</p>
            <p className={styles.content}>{post.content}</p>
          </section>
        );
      })}
    </>
  );
}
