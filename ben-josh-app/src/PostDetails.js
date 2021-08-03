import { useState } from "react"
import { Button, Icon } from 'semantic-ui-react'

function PostDetails({ post, handlePostDelete }){
    //fetch the comments for the post
    //https://react.semantic-ui.com/views/card/#types-card-props
    const [ voteCount, setVoteCount ] = useState(post.upvotes-post.downvotes)
    const [ downVoteClicked, setDownVoteClicked ] = useState(false)
    const [ upVoteClicked, setUpVoteClicked ] = useState(false)

    function handleDownVote(){
        if (downVoteClicked === false){
             fetch(`http://localhost:3001/posts/${post.id}`, {
                 method: "PATCH",
                 headers: {'Content-Type': 'application/json'},
                 body: JSON.stringify({
                     downvotes: post.downvotes +1
                 })
             })
             .then(res => res.json())
             .then(data => setVoteCount(data.upvotes - data.downvotes))
        }else{
            fetch(`http://localhost:3001/posts/${post.id}`, {
                 method: "PATCH",
                 headers: {'Content-Type': 'application/json'},
                 body: JSON.stringify({
                     downvotes: post.downvotes
                 })
             })
             .then(res => res.json())
             .then(data => setVoteCount(data.upvotes - data.downvotes))
        }
        setDownVoteClicked(downVoteClicked => !downVoteClicked)
        setUpVoteClicked(false)
    }

    function handleUpVote(){
        if (upVoteClicked === false){
            fetch(`http://localhost:3001/posts/${post.id}`, {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    upvotes: post.upvotes + 1
                })
            })
            .then(res => res.json())
            .then(data => setVoteCount(data.upvotes - data.downvotes))
       }
        setUpVoteClicked(upVoteClicked => !upVoteClicked)  
        setDownVoteClicked(false)  
    }

    function handleDelete(){
        handlePostDelete(post.id)
    }

    return (
        <div>
            <h3>{post.title}</h3>
            <img src={post.image} alt="Some Image"/>
            <p>{post.text}</p>
            <ul>
                <li>{post.comments.length} comments</li>
            </ul>
            <Button icon name="upVote" onClick={handleUpVote}>
                <Icon name='angle up' />
            </Button>
            <span>{voteCount}</span>
            <Button icon name="downVote" onClick={handleDownVote}>
                <Icon name='angle down' />
            </Button>
            <Button icon name="delete" onClick={handleDelete}>
                <Icon name='trash' />
            </Button>
        </div>
    )
}

export default PostDetails