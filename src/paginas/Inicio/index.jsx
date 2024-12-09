import styles from "paginas/Inicio/inicio.module.css";
import posts from "assets/posts/json/posts.json";
import Post from "componentes/PostCard";

export default function Inicio() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}
