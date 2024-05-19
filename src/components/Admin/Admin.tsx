
import AdminCreatePost from "./Admin_create_post";
import AdminAddPost from "./Admin_add_post";
import Statistics from "../Statistics";



interface Post {
    title: string;
    content: string;
    key: string;
  }
  
  interface IListPost {
    listPosts: Post[];
    setListPosts: (value: Post[]) => void;
    show: boolean; 
    setShow: (value: boolean) => void 
  }
export default function Admin(props: IListPost) {

  return (
    <>
      {!props.show && (
        <>
          <AdminCreatePost setListPosts={props.setListPosts} listPosts={props.listPosts} />
          <AdminAddPost setListPosts={props.setListPosts} listPosts={props.listPosts}  />
          <button className='change_role' onClick={() => props.setShow(true)}>Change role</button>
          <Statistics/>
        </>
      )}

    </>
  );
}