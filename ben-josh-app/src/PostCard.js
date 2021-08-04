import UpAndDownVote from "./UpAndDownVote"
import { Link } from "react-router-dom"
import { Button, Grid } from 'semantic-ui-react'

function PostCard({post, allPosts, setPosts, handlePostDelete}){
    console.log(post)

    const myLabel = { as: 'a', basic: true, pointing: 'left', content: post.comments.length }

    return (
        <>
        <Link to={`/posts/${post.id}`}>
            <div className='card'>
                <Grid >
                    <Grid.Row>
                    <Grid.Column width ={1}>
                        <Link to="/" className="postLink">
                            <UpAndDownVote post={post}/>
                        </Link>
                    </Grid.Column>
                    <Grid.Column width ={14}>
                        {/* <Link to={`/posts/${post.id}`} className="postLink"> */}
                            <div>
                                <h2>{post.title}</h2>
                                <img src={post.image} alt={post.title}/>
                                <p>{post.text}</p>
                                <div>
                                    {/* <Button icon name="comment">
                                        <Icon name='comment' />
                                    </Button> */}
                                    <Button
                                        content='Comments'
                                        icon='comment'
                                        label={myLabel}
                                        labelPosition='right'
                                    />
                                </div>
                            </div> 
                        {/* </Link> */}
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </Link>
        </> 
    )
}

export default PostCard