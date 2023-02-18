import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/7614138?v=4",
      name: "Marcus Botelho",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae varius massa. Fusce egestas luctus odio sit amet ornare. Sed vitae rutrum leo. Sed lectus purus, porta eget tellus pellentesque, molestie luctus mi. ",
      },
      {
        type: "paragraph",
        content:
          "Morbi eu accumsan turpis. Nunc dignissim finibus ante non ullamcorper. Quisque quis aliquam lectus. Nunc molestie eu magna non gravida. Etiam non imperdiet nunc. Donec pulvinar nisi sed orci aliquet, quis elementum erat mattis.",
      },
      { type: "link", content: "https://www.lipsum.com/feed/html" },
    ],
    publishedAt: new Date("2023-02-12 10:26:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/7614138?v=4",
      name: "Marcus Vinicius",
      role: "Front end developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae varius massa. Fusce egestas luctus odio sit amet ornare. Sed vitae rutrum leo. Sed lectus purus, porta eget tellus pellentesque, molestie luctus mi. ",
      },
      {
        type: "paragraph",
        content:
          "Morbi eu accumsan turpis. Nunc dignissim finibus ante non ullamcorper. Quisque quis aliquam lectus. Nunc molestie eu magna non gravida. Etiam non imperdiet nunc. Donec pulvinar nisi sed orci aliquet, quis elementum erat mattis.",
      },
      { type: "link", content: "https://www.lipsum.com/feed/html" },
    ],
    publishedAt: new Date("2023-02-14 09:26:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/7614138?v=4",
      name: "Vinicius Carvalho",
      role: "Full Stack Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae varius massa. Fusce egestas luctus odio sit amet ornare. Sed vitae rutrum leo. Sed lectus purus, porta eget tellus pellentesque, molestie luctus mi. ",
      },
      {
        type: "paragraph",
        content:
          "Morbi eu accumsan turpis. Nunc dignissim finibus ante non ullamcorper. Quisque quis aliquam lectus. Nunc molestie eu magna non gravida. Etiam non imperdiet nunc. Donec pulvinar nisi sed orci aliquet, quis elementum erat mattis.",
      },
      { type: "link", content: "https://www.lipsum.com/feed/html" },
    ],
    publishedAt: new Date("2023-02-14 10:28:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
