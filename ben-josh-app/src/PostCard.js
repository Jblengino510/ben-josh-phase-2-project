import UpAndDownVote from "./UpAndDownVote"
import { Link, Route } from "react-router-dom"
import { Button, Icon } from 'semantic-ui-react'

function PostCard({post, allPosts, setPosts, handlePostDelete}){
    return (
        <>
        <div className='card'>
            <UpAndDownVote post={post}/>
            <Link to={`/posts/${post.id}`}>
               <div>
                   <h3>{post.title}</h3>
                   <img src={post.image} />
                   <p>{post.text}</p>
                   <div>
                    <Button icon name="comment">
                        <Icon name='comment' />
                    </Button>
                   </div>
               </div> 
            </Link>
        </div>
            
            {/* <Route exact path={'/posts/:postId'}>
                <PostDetails post={post} allPosts={allPosts} setPosts={setPosts} handlePostDelete={handlePostDelete}/>
            </Route>     */}
        </> 
    )
}

export default PostCard