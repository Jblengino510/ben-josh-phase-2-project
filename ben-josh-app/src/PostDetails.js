import { Button, Icon } from 'semantic-ui-react'

function PostDetails({ post }){
    //fetch the comments for the post
    //https://react.semantic-ui.com/views/card/#types-card-props

    return (
        <div>
            <h3>{post.title}</h3>
            <img src={post.image} alt="Some Image"/>
            <p>{post.text}</p>
            <ul>
                <li>List of comments</li>
            </ul>
            <Button icon>
                <Icon name='angle up' />
            </Button>
            <span>{post.upvotes-post.downvotes}</span>
            <Button icon>
                <Icon name='angle down' />
            </Button>
        </div>
    )
}

export default PostDetails