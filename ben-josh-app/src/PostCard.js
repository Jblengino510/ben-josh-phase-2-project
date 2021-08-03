import PostDetails from "./PostDetails"

function PostCard({post, handlePostDelete}){
    return (
        <>
            <PostDetails post={post} handlePostDelete={handlePostDelete}/>
        </> 
    )
}

export default PostCard