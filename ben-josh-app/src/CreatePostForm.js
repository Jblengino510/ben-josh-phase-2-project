import {useState} from 'react'
import { Input, TextArea, Form } from "semantic-ui-react"
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

function CreatePostForm({ posts, setPosts, loggedInUser, createPost, editPostData, setOpen, setEdit, edit }){
    let formSeed = {}
    if(createPost){
        formSeed = {
            title: '',
            image: '',
            text: ''
        }
    }else{
        formSeed = formSeed = {
            title: editPostData.title,
            image: editPostData.image,
            text: editPostData.text
        }
    }
    const [ formData, setFormData ] = useState(formSeed)
    
    const history = useHistory()

    function handleFormChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleFormSubmit(e){
        e.preventDefault()
        
        if(createPost){
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
                    body: JSON.stringify({...postData, dateCreated: new Date().toLocaleString()})
                }).then(r => r.json())
                .then(data => {
                    setPosts([data, ...posts])
                    history.push('/')
                })
            }
        }else{
            if(loggedInUser){
                const postData = {
                    ...formData,
                }
                fetch(`http://localhost:3000/posts/${editPostData.id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({...postData})
                }).then(r => r.json())
                .then(data => {
                    //setPosts([data, ...posts])
                    console.log(data)
                    setOpen(false)
                    setEdit(edit => !edit)
                    //history.push(`/posts/${editPostData.id}`)
                })
            }
        }
    }

    console.log(posts)

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
                <Button type='submit' color='red'>{createPost? "Post" : "Edit"} </Button>
            </div>
        </Form>
        </div>
    )
}

export default CreatePostForm