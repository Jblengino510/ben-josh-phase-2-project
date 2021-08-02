import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

function CreatePost(){
    const [ showPostForm, setShowPostForm ] = useState(false)
    const history = useHistory()

    function togglePostForm(){
        setShowPostForm(showPostForm => !showPostForm)
        history.push('/posts/new')
    }


    return (
        <Button color='red' onClick={togglePostForm}>Create Post</Button>
    )
}

export default CreatePost