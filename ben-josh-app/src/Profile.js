import { Button, Grid } from "semantic-ui-react";
import {useHistory} from "react-router-dom"
import { Card, Icon } from 'semantic-ui-react'
import PostList from "./PostList";
import CreatePost from "./CreatePost";


function Profile({ allPosts, setPosts, handlePostDelete, setLoggedInUser, loggedInUser }){
    const history = useHistory()

    function handleLogoutClick(){
        setLoggedInUser(null)
        history.push("/")
    }

    if(!loggedInUser){
        history.push("/")
    }
    console.log(allPosts)
    console.log(loggedInUser)

    const profilePosts = allPosts.filter(post => (
        post.userId === loggedInUser.user.id 
    ))

    // const renderedProfilePosts = profilePosts.map(post => (
    //     console.log(post)
    // ))

    return (
        <div className='profilePage'>  
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                    <h1>My Posts</h1> 
                    <PostList setPosts={setPosts} handlePostDelete={handlePostDelete} posts={profilePosts}/>   
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <aside className='profileInfo'>
                        <Button onClick={handleLogoutClick} >Logout</Button>
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
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Profile