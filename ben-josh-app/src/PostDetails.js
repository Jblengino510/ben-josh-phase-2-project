import UpAndDownVote from "./UpAndDownVote"
import CommentForm from "./CommentForm"
import { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { Button, Grid, Icon, Comment, Header } from 'semantic-ui-react'

function PostDetails({ allPosts, setPosts, handlePostDelete, loggedInUser, darkMode }){
    const params = useParams()
    const [ post, setPost ] = useState({})
    const [ fetchedComments, setFetchedComments] = useState([])
    const [ showCommentForm, setShowCommentForm ] = useState(false)
    const history = useHistory()
    let comments = []

    useEffect(() => {
        fetch(`http://localhost:3000/posts/${params.postId}?_embed=comments&_expand=user`)
        .then(r => r.json())
        .then(data => {setPost({...data})
        })
    }, [])

    useEffect(() =>{
        fetch(`http://localhost:3000/comments/?_expand=user`)
        .then(r => r.json())
        .then(data => {setFetchedComments([...data])
        })
    }, [allPosts])

    comments = fetchedComments.filter(c => c.postId === post.id)

    if(comments){
        comments = comments.map(comment => (
            <Comment key={comment.id}>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                    <Comment.Author >{comment.user.email}</Comment.Author>
                    <Comment.Metadata>
                            <span>{comment.dateCreated || null}</span>
                        </Comment.Metadata>
                    <Comment.Text key={comment.id}>
                        {comment.comment}
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
        <div className={darkMode ? 'darkModeCard' : 'card'} style={{margin: "0 auto"}}>
            <Grid>
            <Grid.Row>
            <Grid.Column width = {1}>
            <UpAndDownVote post={post}/>
            </Grid.Column>
            <Grid.Column width={14}>
            <h3>{post.user ? post.user.email : post.email}</h3>
            <h2>{post.title}</h2>
            <img src={post.image} alt="Some Image"/>
            <p>{post.text}</p>
            {!showCommentForm ? null : <CommentForm post={post} allPosts={allPosts} setPosts={setPosts} toggleCommentForm={toggleCommentForm} loggedInUser={loggedInUser}/>}
            <div className='commentSection'>
                
                <Comment.Group threaded>
                    <Header as='h3' dividing>
                    {post.comments ? post.comments.length  + ( post.comments.length === 1 ? " Comment" : " Comments") : 0 + " Comments"} 
                    </Header>
                    {comments} 
                </Comment.Group>

            </div>
            <span>
                <Button icon labelPosition='left' onClick={toggleCommentForm}>
                    <Icon name='comment' />
                    Reply
                </Button>
                {loggedInUser && loggedInUser.user.id === post.userId ? (    
                <Button icon name="delete" onClick={handleDelete}>
                    <Icon name='trash' />
                </Button> ) : ( null )}
            </span>
            </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    )
}

export default PostDetails