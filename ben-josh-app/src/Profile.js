import { useHistory, Link } from "react-router-dom"
import { Button, Grid, Card, Icon } from 'semantic-ui-react'
import PostList from "./PostList";
import CreatePost from "./CreatePost";


function Profile({ allPosts, setPosts, handlePostDelete, setLoggedInUser, loggedInUser, darkMode }){
    const history = useHistory()

    function handleLogoutClick(){
        setLoggedInUser(null)
        history.push("/")
        localStorage.clear()
    }

    if(!loggedInUser){
        history.push("/")
    }
  
    const profilePosts = allPosts.filter(post => (
        post.userId === loggedInUser.user.id 
    ))

    return (
        <div className='profilePage'>  
            <Grid>
                <Grid.Row>
                    <Grid.Column width={9}>
                    <h1 style={darkMode ? {color: 'white'} : {color: 'black'}}>My Posts</h1>
                    <div className='cardWrapper'>
                    <Link to="/profile">
                    <PostList setPosts={setPosts} handlePostDelete={handlePostDelete} posts={profilePosts} darkMode={darkMode}/>
                    </Link>
                    </div>
                    </Grid.Column>
                    <Grid.Column width={7}>
                    <aside className='profileInfo'>
                        <Button onClick={handleLogoutClick}>Logout</Button>
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