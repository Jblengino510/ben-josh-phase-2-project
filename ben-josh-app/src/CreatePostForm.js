import {useState, useEffect} from 'react'
import {Input} from "semantic-ui-react"
import { Button } from 'semantic-ui-react'

function CreatePostForm(){
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        text: ''
    })

    function handleFormChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleFormSubmit(e){
        e.preventDefault()
        console.log(formData)
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }).then(r=>r.json())
        .then(console.log)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <input 
                type='text' 
                placeholder='title' 
                name='title'
                value={formData.title}
                onChange={handleFormChange}
                >   
                </input>
            </div>
            <div>
                <input 
                    type='text' 
                    placeholder='image url'
                    name='image'
                    value={formData.image}
                    onChange={handleFormChange} 
                    ></input>
            </div>
            <div>
                <textarea 
                    type='text' 
                    placeholder='Text (optional)'
                    name='text'
                    value={formData.text}
                    onChange={handleFormChange} 
                    ></textarea>
            </div>
            <div>
                <Button type='submit' color='red'>Post</Button>
            </div>
        </form>
    )
}

export default CreatePostForm