import CreatePost from "./CreatePost";
import PostList from "./PostList";

function Home({ posts }){
    return (
        <>
            <CreatePost />
            <PostList posts={posts}/>
        </>
    )
}

export default Home