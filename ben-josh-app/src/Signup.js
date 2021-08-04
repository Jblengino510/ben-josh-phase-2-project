import {Form, Input, Button} from "semantic-ui-react"
import { useState } from "react"
import { useHistory } from "react-router-dom"

function Signup({setLoggedInUser}){
    const [formData, setFormData] = useState({
                                            username: "",
                                            password: ""
                                             })
    const history = useHistory()                                        

    function handleFormChange(e){
        setFormData({...formData, 
        [e.target.name]: e.target.value
        })
    }

    function handleSignupSubmit(e){
        const init = {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }
        fetch(`http://localhost:3001/users`, init)  //?q=${formData.username}
        .then(r=>r.json())
        .then(data=>{
            setLoggedInUser(data)
            history.push("/profile")
            }
        ) 
    }

    return (
        <div className = "loginForm">
            <Form onSubmit={handleSignupSubmit}>
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
                <Button type='submit' color='red'>Signup</Button>
            </Form>
        </div>
    )

}

export default Signup