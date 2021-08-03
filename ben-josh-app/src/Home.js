import CreatePost from "./CreatePost";
import PostList from "./PostList";

function Home({ posts, setPosts, handlePostDelete }){
    return (
        <>
            <CreatePost />
            <PostList posts={posts} setPosts={setPosts} handlePostDelete={handlePostDelete}/>
        </>
    )
}

export default Home