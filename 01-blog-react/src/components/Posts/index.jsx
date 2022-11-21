import styles from './Posts.module.scss';
import posts from './posts.json';
import { HeartStraight } from 'phosphor-react';
import { useState } from 'react';

export default function Posts() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <>
      {posts.map((post) => {
        return (
          <section key={post.id}>
            <div className={styles.info}>
              <p>{post.date}</p>
              <p>
                <HeartStraight
                  size={20}
                  color="#574ae8"
                  weight="fill"
                  onClick={handleClick}
                  style={{
                    fill: isActive ? '#dede' : '',
                  }}
                />
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
