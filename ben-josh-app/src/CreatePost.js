import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

function CreatePost(){
    const history = useHistory()

    function togglePostForm(){
        history.push('/posts/new')
    }

    return (
        <div className="createPost">
            <Button circular style={{ width: '300px' }} color='red' onClick={togglePostForm}>Create Post</Button>
        </div>
    )
}

export default CreatePost