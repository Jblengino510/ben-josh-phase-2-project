import { TextArea } from "semantic-ui-react"

function CommentForm(){
    return (
        <div>
            <TextArea type="text" name="comment" placeholder="Say something..."></TextArea>
        </div>
    )
}

export default CommentForm