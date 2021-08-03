import { useState } from "react"
import { Button, TextArea } from "semantic-ui-react"

function CommentForm({ post, allPosts, setPosts, toggleCommentForm }){
    const [ commentData, setCommentData ] = useState({
        "comment": "",
        "postId": post.id,
        "userId": 1,
        "upvotes": 200,
        "downvotes": 10
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
        fetch('http://localhost:3001/comments', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(commentData)
        }).then(r=>r.json())
        .then(data=>{
            console.log(data)
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
            "userId": 1,
            "upvotes": 200,
            "downvotes": 10
          })
    }


    return (
        <div>
            <form onSubmit={handleCommentSubmit}>
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
                    <Button type='submit' color='white'>Post</Button>
                </div>
            </form>
        </div>
    )
}

export default CommentForm