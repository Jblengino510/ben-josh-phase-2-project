import {Form, Segment, Grid, Divider, Button} from "semantic-ui-react"
import { useState } from "react"
import {Link} from 'react-router-dom'

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
             <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
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