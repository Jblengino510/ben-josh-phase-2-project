import UpAndDownVote from "./UpAndDownVote"
import CommentForm from "./CommentForm"
import { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'

function PostDetails({ allPosts, setPosts, handlePostDelete }){
    //fetch the comments for the post
    //https://react.semantic-ui.com/views/card/#types-card-props
    const params = useParams()
    console.log(params)

    const [post, setPost] = useState({})
    const [ showCommentForm, setShowCommentForm] = useState(false)

    const history = useHistory()
    let comments = []

    useEffect(() => {
        fetch(`http://localhost:3001/posts/${params.postId}?_embed=comments`)
        .then(r=> r.json())
        .then(data => setPost(data))
    }, [])

    if(post.comments){
        comments = post.comments.map(comment => (
            <li>{comment.comment}</li>
        ))
    }

    function toggleCommentForm(){
        setShowCommentForm(showCommentForm => !showCommentForm)
        history.push(`/posts/${post.id}`)
    }


    function handleDelete(){
        handlePostDelete(post.id)
    }

    return (
        <div className='card'>
            <UpAndDownVote post={post}/>
            <h3>{post.title}</h3>
            <img src={post.image} alt="Some Image"/>
            <div className='commentSection'>
                <p>{post.text}</p>
                {!showCommentForm ? null : <CommentForm post={post} allPosts={allPosts} setPosts={setPosts} toggleCommentForm={toggleCommentForm}/>}
                <ul>
                    {post.comments ? post.comments.length  + ( post.comments.length === 1 ? " Comment" : " Comments"): 0 + " Comments"} 
                    {comments}
                </ul>
                <span>
                    <Button icon name="comment" onClick={toggleCommentForm}>
                        <Icon name='comment' />
                    </Button>
                    <Button icon name="delete" onClick={handleDelete}>
                        <Icon name='trash' />
                    </Button>
                </span>
            </div>
        </div>
    )
}

export default PostDetails