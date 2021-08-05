import { useState } from "react"
import { Button, Form, TextArea } from "semantic-ui-react"

function CommentForm({ post, allPosts, setPosts, toggleCommentForm, loggedInUser }){
    const [ commentData, setCommentData ] = useState({
        "comment": "",
        "postId": post.id,
        "userId": loggedInUser ? loggedInUser.user.id : 1,
        "upvotes": 0,
        "downvotes": 0
      })

    function handleCommentChange(e){
        setCommentData({
            ...commentData,
            [e.target.name]: e.target.value
        })
    }

    function handleCommentSubmit(e){
        e.preventDefault()
        toggleCommentForm()
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...commentData,
                                  dateCreated: new Date().toLocaleString()})
        }).then(r=>r.json())
        .then(data=>{
            if(post.comments){
                post.comments = [...post.comments, data]
            } else {
                post.comments = [data]
            }
            setPosts([...allPosts])
        })
        setCommentData({
            "comment": "",
            "postId": post.id,
            "userId": loggedInUser ? loggedInUser.user.id : 1,
            "upvotes": 0,
            "downvotes": 0
          })
    }


    return (
        <div>
            <Form onSubmit={handleCommentSubmit}>
                <div>
                    <TextArea 
                    type="text" 
                    name="comment" 
                    placeholder="Say something..."
                    value={commentData.comment}
                    onChange={handleCommentChange}
                    ></TextArea>
                </div>
                <div>
                    <Button type='submit' color='red'>Post</Button>
                </div>
            </Form>
        </div>
    )
}

export default CommentForm