import {Form, Segment, Grid, Divider, Button} from "semantic-ui-react"
import { useState } from "react"
import { Link, useHistory } from 'react-router-dom'

function Login({setLoggedInUser}){
    const [formData, setFormData] = useState({
                                            email: "",
                                            password: ""
                                             })
    const history = useHistory() 
                                             
    function handleFormChange(e){
        setFormData({...formData, 
        [e.target.name]: e.target.value
        })
    }
    function handleLoginSubmit(e){
        const init = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }
        fetch(`http://localhost:3000/signin`, init)  
        .then(r=>r.json())
        .then(data=>{
                if(data.accessToken){
                    setLoggedInUser(data)
                    history.push('/profile')
                }
        }) 
    }

    return (
        
        
        <div className = "loginForm">
             <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
                        <Form onSubmit={handleLoginSubmit}>
                            <Form.Input
                            type='text' 
                            placeholder='email' 
                            name='email'
                            value={formData.email}
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
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                        <Link to="/signup"><Button content='Sign up' icon='signup' size='big' /></Link>
                    </Grid.Column>
                    </Grid>

                    <Divider vertical>Or</Divider>
                </Segment>
            
        </div>
    )

}

export default Login