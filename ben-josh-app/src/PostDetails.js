import CommentForm from "./CommentForm"
import { useState } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'

function PostDetails({ allPosts, setPosts, handlePostDelete }){
    //fetch the comments for the post
    //https://react.semantic-ui.com/views/card/#types-card-props
    const params = useParams()
    console.log(params)

    const [post] = allPosts.filter(post=> post.id === parseInt(params.postId))
    console.log(post)


    const [ voteCount, setVoteCount ] = useState(post.upvotes-post.downvotes)
    const [ downVoteClicked, setDownVoteClicked ] = useState(false)
    const [ upVoteClicked, setUpVoteClicked ] = useState(false)
    const [ showCommentForm, setShowCommentForm] = useState(false)

   
    const history = useHistory()

    let comments = []

    if(post.comments){
        comments = post.comments.map(comment => (
            <li>{comment.comment}</li>
        ))
    }

    function toggleCommentForm(){
        setShowCommentForm(showCommentForm => !showCommentForm)
        history.push(`/posts/${post.id}`)
    }

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
       }else{
            fetch(`http://localhost:3001/posts/${post.id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                upvotes: post.upvotes
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
            {!showCommentForm ? null : <CommentForm post={post} allPosts={allPosts} setPosts={setPosts} toggleCommentForm={toggleCommentForm}/>}
            <ul>
                {post.comments ? post.comments.length : 0} {post.comments.length === 1 ? "Comment" : "Comments"}
                {comments}
            </ul>
            <Button icon name="upVote" onClick={handleUpVote}>
                <Icon name='angle up' />
            </Button>
            <span>{voteCount}</span>
            <Button icon name="downVote" onClick={handleDownVote}>
                <Icon name='angle down' />
            </Button>
            <Button icon name="comment" onClick={toggleCommentForm}>
                <Icon name='comment' />
            </Button>
            <Button icon name="delete" onClick={handleDelete}>
                <Icon name='trash' />
            </Button>
        </div>
    )
}

export default PostDetails