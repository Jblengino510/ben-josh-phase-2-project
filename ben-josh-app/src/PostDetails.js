import UpAndDownVote from "./UpAndDownVote"
import CommentForm from "./CommentForm"
import { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { Button, Grid, Icon, Comment, Header } from 'semantic-ui-react'

function PostDetails({ allPosts, setPosts, handlePostDelete }){
    //fetch the comments for the post
    //https://react.semantic-ui.com/views/card/#types-card-props
    const params = useParams()
    
    const [ post, setPost ] = useState({})
    const [ showCommentForm, setShowCommentForm ] = useState(false)
    const history = useHistory()
    let comments = []

    useEffect(() => {
        fetch(`http://localhost:3001/posts/${params.postId}?_embed=comments`)
        .then(r => r.json())
        .then(data => setPost({...data}))
    }, [])

    if(post.comments){
        comments = post.comments.map(comment => (
            <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                    <Comment.Text key={comment.id}>
                        {comment.comment}
                        <Comment.Metadata>
                            <span>{new Date().toLocaleString()}</span>
                        </Comment.Metadata>
                        <Comment.Actions>
                            <a onClick={toggleCommentForm}>Reply</a>
                        </Comment.Actions>
                    </Comment.Text>
                </Comment.Content>
            </Comment>
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
            <Grid>
            <Grid.Row>
            <Grid.Column width = {1}>
            <UpAndDownVote post={post}/>
            </Grid.Column>
            <Grid.Column width={14}>
            <h2>{post.title}</h2>
            <img src={post.image} alt="Some Image"/>
            <p>{post.text}</p>
            {!showCommentForm ? null : <CommentForm post={post} allPosts={allPosts} setPosts={setPosts} toggleCommentForm={toggleCommentForm}/>}
            <div className='commentSection'>
                
                <Comment.Group threaded>
                    <Header as='h3' dividing>
                    {post.comments ? post.comments.length  + ( post.comments.length === 1 ? " Comment" : " Comments"): 0 + " Comments"} 
                    </Header>
                    {comments} 
                </Comment.Group>
            </div>
            <span>
                <Button icon labelPosition='left' onClick={toggleCommentForm}>
                    <Icon name='comment' />
                    Reply
                </Button>
                    
                <Button icon name="delete" onClick={handleDelete}>
                    <Icon name='trash' />
                </Button>
            </span>
            </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    )
}

export default PostDetails