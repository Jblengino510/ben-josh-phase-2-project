import PostDetails from "./PostDetails"
import { Link, Route } from "react-router-dom"

function PostCard({post, allPosts, setPosts, handlePostDelete}){
    return (
        <>
            <Link to={`/posts/${post.id}`}>
               <div>
                   <h3>{post.title}</h3>
                   <img src={post.image} />
                   <p>{post.text}</p>
               </div> 
            </Link>
            
            {/* <Route exact path={'/posts/:postId'}>
                <PostDetails post={post} allPosts={allPosts} setPosts={setPosts} handlePostDelete={handlePostDelete}/>
            </Route>     */}
        </> 
    )
}

export default PostCard