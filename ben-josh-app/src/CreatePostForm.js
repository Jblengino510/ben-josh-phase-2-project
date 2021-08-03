import {useState} from 'react'
import {Input, TextArea} from "semantic-ui-react"
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

function CreatePostForm({posts, setPosts}){
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        text: ''
    })
    const history = useHistory()

    function handleFormChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleFormSubmit(e){
        e.preventDefault()
        console.log(formData)
        const postData = {
            ...formData,
            upvotes: 0,
            downvotes: 0,
            userId: 1
        }
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(postData)
        }).then(r=>r.json())
        .then(data=>{
            setPosts([data, ...posts])
            history.push('/')
        })
    }


    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <Input 
                type='text' 
                placeholder='title' 
                name='title'
                value={formData.title}
                onChange={handleFormChange}
                >   
                </Input>
            </div>
            <div>
                <Input 
                    type='text' 
                    placeholder='image url'
                    name='image'
                    value={formData.image}
                    onChange={handleFormChange} 
                    ></Input>
            </div>
            <div>
                <TextArea 
                    type='text' 
                    placeholder='Text (optional)'
                    name='text'
                    value={formData.text}
                    onChange={handleFormChange} 
                    ></TextArea>
            </div>
            <div>
                <Button type='submit' color='red'>Post</Button>
            </div>
        </form>
    )
}

export default CreatePostForm