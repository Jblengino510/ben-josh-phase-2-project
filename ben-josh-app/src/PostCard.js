import PostDetails from "./PostDetails"

function PostCard({post, allPosts, setPosts, handlePostDelete}){
    return (
        <>
            <PostDetails post={post} allPosts={allPosts} setPosts={setPosts} handlePostDelete={handlePostDelete}/>
        </> 
    )
}

export default PostCard