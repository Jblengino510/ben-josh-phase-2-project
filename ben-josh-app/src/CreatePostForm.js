import {useState} from 'react'
import {Input, TextArea, Form} from "semantic-ui-react"
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

function CreatePostForm({posts, setPosts, loggedInUser}){
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
        
        if(loggedInUser){
            const postData = {
                ...formData,
                upvotes: 0,
                downvotes: 0,
                userId: loggedInUser.user.id,
                email: loggedInUser.user.email
            }
            fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(postData)
            }).then(r=>r.json())
            .then(data=>{
                setPosts([data, ...posts])
                history.push('/')
            })
        }
    }

    return (
        <div className = "postForm">
        <Form onSubmit={handleFormSubmit}>
            <div>
                <Form.Input 
                type='text' 
                placeholder='title' 
                name='title'
                value={formData.title}
                onChange={handleFormChange}
                style={{width: 400}}
                >   
                </Form.Input>
            </div>
            <div>
                <Form.Input 
                    type='text' 
                    placeholder='image url'
                    name='image'
                    value={formData.image}
                    onChange={handleFormChange}
                    style={{width: 400}} 
                    ></Form.Input>
            </div>
            <div>
                <TextArea 
                    type='text' 
                    placeholder='Text (optional)'
                    name='text'
                    value={formData.text}
                    onChange={handleFormChange}
                    style={{width: 400}} 
                    ></TextArea>
            </div>
            <div>
                <Button type='submit' color='red'>Post</Button>
            </div>
        </Form>
        </div>
    )
}

export default CreatePostForm