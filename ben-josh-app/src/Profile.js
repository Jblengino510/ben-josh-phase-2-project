import { Button } from "semantic-ui-react";
import {useHistory} from "react-router-dom"
import { Card, Icon } from 'semantic-ui-react'
import CreatePost from "./CreatePost";


function Profile({setLoggedInUser}){
    const history = useHistory()

    function handleLogoutClick(){
        setLoggedInUser(null)
        history.push("/")
    }

    return (
        <div className='profilePage'>  
            <aside className='profileInfo'>
                <Card 
                    image='https://react.semantic-ui.com/images/avatar/small/matt.jpg'
                    header='Elliot Baker'
                    meta='Friend'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'  
                />
                <CreatePost />
                <Card>
                    <Card.Content header='About' />
                    <Card.Content header='Careers' />
                    <Card.Content header='Privacy Policy' />
                    <Card.Content description='' />
                    <Card.Content extra>
                        Creddit Inc 2021. <Icon name='closed captioning outline' />All Rights Reserved
                    </Card.Content>
                </Card>
            </aside>
            <Button onClick={handleLogoutClick}>Logout</Button>
        </div>
    )
}

export default Profile