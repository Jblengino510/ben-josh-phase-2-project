import { Button, Icon } from 'semantic-ui-react'

function PostDetails(){
    return (
        <div>
            <h1>Title</h1>
            <img src="" alt="Some Image"/>
            <p>Post content</p>
            <ul>
                <li>List of comments</li>
            </ul>
            <Button icon>
                <Icon name='angle up' />
            </Button>
            <Button icon>
                <Icon name='angle down' />
            </Button>
        </div>
    )
}

export default PostDetails