import CreatePost from "./CreatePost";
import PostList from "./PostList";

function Home({ posts, handlePostDelete }){
    return (
        <>
            <CreatePost />
            <PostList posts={posts} handlePostDelete={handlePostDelete}/>
        </>
    )
}

export default Home