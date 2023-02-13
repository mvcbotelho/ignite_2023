import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/7614138?v=4"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Marcus Botelho</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="2 de fevereiro às 21:25" dateTime="2023--02-02 21:25:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vitae varius massa. Fusce egestas luctus odio sit amet ornare. Sed
          vitae rutrum leo. Sed lectus purus, porta eget tellus pellentesque,
          molestie luctus mi. Morbi eu accumsan turpis. Nunc dignissim finibus
          ante non ullamcorper. Quisque quis aliquam lectus. Nunc molestie eu
          magna non gravida. Etiam non imperdiet nunc. Donec pulvinar nisi sed
          orci aliquet, quis elementum erat mattis.
        </p>
        <p>
          Donec porttitor in nisl vitae imperdiet:{" "}
          <a href="">https://www.lipsum.com/feed/html</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
