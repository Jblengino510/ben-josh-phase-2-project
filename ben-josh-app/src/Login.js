import {Form, Input, Button} from "semantic-ui-react"
import { useState } from "react"

function Login({setLoggedInUser}){
    const [formData, setFormData] = useState({
                                            username: "",
                                            password: ""
                                             })
    function handleFormChange(e){
        setFormData({...formData, 
        [e.target.name]: e.target.value
        })
    }

    function handleLoginSubmit(e){
        //fetch from the users where username === username GET /posts?q=internet
        fetch(`http://localhost:3001/users`)  //?q=${formData.username}
        .then(r=>r.json())
        .then(data=>{
            const targetUser = data.filter(user => user.username === formData.username)
            if(targetUser.length > 0 && targetUser[0].password === formData.password){
                setLoggedInUser(targetUser[0])
                console.log('happened')
            }
        }) //then check if data[0].password === formData.password

        //console.log(formData)
    }

    return (
        <div className = "loginForm">
            <Form onSubmit={handleLoginSubmit}>
                <Form.Input
                type='text' 
                placeholder='username' 
                name='username'
                value={formData.username}
                onChange={handleFormChange}
                >
                </Form.Input>
            
                <Form.Input
                type='password' 
                placeholder='password' 
                name='password'
                value={formData.password}
                onChange={handleFormChange}
                >
                </Form.Input>
                <Button type='submit' color='red'>Login</Button>
            </Form>
        </div>
    )

}

export default Login