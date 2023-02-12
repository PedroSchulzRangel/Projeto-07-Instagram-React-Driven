import listaDePosts from "../listaDePosts";
import Post from "./Post";

export default function Posts(){
    return(
        <div className="posts">
          {listaDePosts.map((p, index) => <Post key={index} objeto={p}/>)}
        </div>
    );
}