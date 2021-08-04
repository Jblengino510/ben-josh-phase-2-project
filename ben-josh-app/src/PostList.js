import PostCard from "./PostCard"

function PostList({ posts, setPosts, handlePostDelete }){
    

    const renderedPosts = posts.map((post)=><PostCard key={post.id} post={post} allPosts={posts} setPosts={setPosts} handlePostDelete={handlePostDelete}/>)

    return (
        <>
            {renderedPosts}
        </>
    )
}

export default PostList