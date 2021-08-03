import PostCard from "./PostCard"
import { useState, useEffect } from "react"

function PostList({ posts, setPosts, handlePostDelete }){
    

    const renderedPosts = posts.map((post)=><PostCard key={post.id} post={post} allPosts={posts} setPosts={setPosts} handlePostDelete={handlePostDelete}/>)

    return (
        <>
            {renderedPosts}
        </>
    )
}

export default PostList