import PostCard from "./PostCard"

function PostList({ posts, setPosts, handlePostDelete, darkMode }){
    

    const renderedPosts = posts.map((post)=><PostCard key={post.id} post={post} allPosts={posts} setPosts={setPosts} handlePostDelete={handlePostDelete} darkMode={darkMode}/>)

    return (
        <>
            <div className="postWrapper">
                {renderedPosts}
           </div>
        </>
    )
}

export default PostList