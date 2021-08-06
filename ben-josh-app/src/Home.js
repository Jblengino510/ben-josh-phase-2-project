import CreatePost from "./CreatePost";
import PostList from "./PostList";
import { Card, Icon, Grid, GridColumn } from "semantic-ui-react"

function Home({ posts, setPosts, handlePostDelete, loggedInUser, darkMode }){
    return (
        <>
            <div className='homePage'>
                {loggedInUser ? <CreatePost /> : null}
                <Grid>
                    <GridColumn width={9}>
                        <PostList posts={posts} setPosts={setPosts} handlePostDelete={handlePostDelete} darkMode={darkMode}/>
                    </GridColumn>
                    <GridColumn width={7}>
                        <aside className='profileInfo'>
                            <Card>
                                <Card.Content header='About' />
                                <Card.Content header='Careers' />
                                <Card.Content header='Privacy Policy' />
                                <Card.Content description='' />
                                <Card.Content extra>
                                    Creddit Inc 2021. <Icon name='closed captioning outline'/>All Rights Reserved
                                </Card.Content>
                            </Card>
                        </aside>
                    </GridColumn>
                </Grid>
            </div>
        </>
    )
}

export default Home