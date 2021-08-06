import UpAndDownVote from "./UpAndDownVote"
import { Link } from "react-router-dom"
import { Button, Grid } from 'semantic-ui-react'

function PostCard({ post, darkMode, allPosts, setPosts, handlePostDelete }){
    const myLabel = { as: 'a', basic: true, pointing: 'left', content: post.comments ? post.comments.length : 0 }
    // console.log(post)
    return (
        <div className='cardWrapper'>
        <Link to={`/posts/${post.id}`}>
            <div className={darkMode ? 'darkModeCard' : 'card'}>
                <Grid >
                    <Grid.Row>
                    <Grid.Column width ={1}>
                        <Link>
                            <UpAndDownVote post={post}/>
                        </Link>
                    </Grid.Column>
                    <Grid.Column width ={14}>
                        {/* <Link to={`/posts/${post.id}`} className="postLink"> */}
                            <div>
                                <h3>{post.user.email}</h3>
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
        </div> 
    )
}

export default PostCard