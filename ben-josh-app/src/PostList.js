import PostCard from "./PostCard"

function PostList({ posts, setPosts, handlePostDelete }){
    

    const renderedPosts = posts.map((post)=><PostCard key={post.id} post={post} allPosts={posts} setPosts={setPosts} handlePostDelete={handlePostDelete}/>)

    return (
        <>
            <div className="postWrapper">
            {renderedPosts}
            </div>
        </>
    )
}

export default PostList