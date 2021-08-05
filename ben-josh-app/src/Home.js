import CreatePost from "./CreatePost";
import PostList from "./PostList";

function Home({ posts, setPosts, handlePostDelete, loggedInUser }){
    return (
        <>
            {loggedInUser ? <CreatePost /> : null}
            <PostList posts={posts} setPosts={setPosts} handlePostDelete={handlePostDelete}/>
        </>
    )
}

export default Home