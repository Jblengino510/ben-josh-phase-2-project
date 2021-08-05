import { Button } from "semantic-ui-react";
import {useHistory} from "react-router-dom"
import { Card, Icon } from 'semantic-ui-react'
import CreatePost from "./CreatePost";


function Profile({setLoggedInUser, loggedInUser}){
    const history = useHistory()

    function handleLogoutClick(){
        setLoggedInUser(null)
        history.push("/")
    }

    if(!loggedInUser){
        history.push("/")
    }

    return (
        <div className='profilePage'>  
            <aside className='profileInfo'>
                <Card 
                    image='https://react.semantic-ui.com/images/avatar/small/matt.jpg'
                    header={loggedInUser.user.email}
                    meta='Friend'
                    description={loggedInUser.user.about ? loggedInUser.user.about : `We don't know anything about ${loggedInUser.user.email}`} 
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