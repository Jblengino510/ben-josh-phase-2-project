import PostCard from "./PostCard"
import { useState, useEffect } from "react"

function PostList(){
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3001/posts/')
        .then(r=> r.json())
        .then(data=>setPosts(data))

    }, [])

    const renderedPosts = posts.map((post)=><PostCard post={post} />)

    return (
        <>
        <h1>Post List</h1>
            {renderedPosts}
        </>
    )
}

export default PostList