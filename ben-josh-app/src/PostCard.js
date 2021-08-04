import UpAndDownVote from "./UpAndDownVote"
import { Link, Route } from "react-router-dom"
import { Button, Grid, Icon } from 'semantic-ui-react'

function PostCard({post, allPosts, setPosts, handlePostDelete}){
    return (
        <>
        <div className='card'>
            <Grid >
                <Grid.Row>
                <Grid.Column width ={1}>
                    <UpAndDownVote post={post}/>
                </Grid.Column>
                <Grid.Column width ={14}>
                    <Link to={`/posts/${post.id}`}>
                        <div>
                            <h2>{post.title}</h2>
                             <img src={post.image} />
                            <p>{post.text}</p>
                            <div>
                                <Button icon name="comment">
                                    <Icon name='comment' />
                                </Button>
                            </div>
                         </div> 
                    </Link>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        </> 
    )
}

export default PostCard