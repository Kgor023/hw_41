import './posts.css';
import { useContext } from "react";
import { Statistic } from "../Choice";
interface Post {
  title: string;
  content: string;
  key: string;
}

interface IListPost {
  listPosts: Post[];
  setListPosts: (value: Post[]) => void;
}

export default function AdminAddPost(props: IListPost) {
  const statistic = useContext(Statistic)
  const handlerDelete = (event: string) => {
    const filterPosts = props.listPosts.filter((post) => post.key !== event);
    props.setListPosts(filterPosts);
    statistic.useStat(statistic.stat + 1);
  };
  return (
    <div>
      {props.listPosts.map((post) => (
        <div key={post.key} className="posts">
          <h2 className="posts__title">{post.title}</h2>
          <p className="posts__content">{post.content}</p>
          <button className="posts__delete" onClick={() => handlerDelete(post.key)}>X</button>
        </div>
      ))}
    </div>
  );
}