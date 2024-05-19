import { useState } from "react";
import Statistics from "../Statistics";
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
  show: boolean;
  setShow: (value: boolean) => void;
}
export default function User(props: IListPost) {
  const statistic = useContext(Statistic)
  const [text, setText] = useState<Post>({ title: "", content: "", key: "" });
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(props.listPosts);

  const handlerFilter = () => {
    const filteredPosts = props.listPosts.filter((post) =>
      post.title.toLowerCase().includes(text.title.toLowerCase())
    );
    setFilteredPosts(filteredPosts);
  };
  return (
    <div>
      {!props.show && (
        <div>
          <div className="inputs">
            <input
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setText({ ...text, title: event.target.value })
              }
              onBlur={() =>{
                statistic.useStat(statistic.stat + 1);
              }}
              type="text"
              placeholder="Put the name of post"
              value={text.title}
            />
            <button style={{ width: "100px" }} onClick={handlerFilter}>
              Filter
            </button>
          </div>
          {filteredPosts.map((post) => (
            <div key={post.key} className="posts">
              <h2 className="posts__title">{post.title}</h2>
              <p className="posts__content">{post.content}</p>
            </div>
          ))}

          <button className="change_role" onClick={() => props.setShow(true)}>
            Change role
          </button>
          <Statistics />
        </div>
      )}
    </div>
  );
}
