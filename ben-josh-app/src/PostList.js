import PostCard from "./PostCard"
import { useState, useEffect } from "react"

function PostList({ posts }){
    

    const renderedPosts = posts.map((post)=><PostCard post={post} />)

    return (
        <>
        <h1>Post List</h1>
            {renderedPosts}
        </>
    )
}

export default PostList