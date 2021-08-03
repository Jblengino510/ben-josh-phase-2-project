import { useState } from "react"
import { Button, Icon } from 'semantic-ui-react'

function UpAndDownVote({ post }){
    console.log("post: ", post)
    const initVotes = post.upvotes - post.downvotes
    const [ voteCount, setVoteCount ] = useState(initVotes)
    const [ downVoteClicked, setDownVoteClicked ] = useState(false)
    const [ upVoteClicked, setUpVoteClicked ] = useState(false)
    
    function handleDownVote(){
        if (downVoteClicked === false){
             fetch(`http://localhost:3001/posts/${post.id}`, {
                 method: "PATCH",
                 headers: {'Content-Type': 'application/json'},
                 body: JSON.stringify({
                     downvotes: post.downvotes +1,
                     upvotes: post.upvotes
                 })
             })
             .then(res => res.json())
             .then(data => setVoteCount(data.upvotes - data.downvotes))
        }else{
            fetch(`http://localhost:3001/posts/${post.id}`, {
                 method: "PATCH",
                 headers: {'Content-Type': 'application/json'},
                 body: JSON.stringify({
                     downvotes: post.downvotes
                 })
             })
             .then(res => res.json())
             .then(data => setVoteCount(data.upvotes - data.downvotes))
        }
        setDownVoteClicked(downVoteClicked => !downVoteClicked)
        setUpVoteClicked(false)
    }

    // if(!voteCount){
    //     if(voteCount === 0){}else{
    //     setVoteCount(parseInt(post.upvotes)-parseInt(post.downvotes))
    //     console.log(voteCount)
    //     }
    // }
    
    
    function handleUpVote(){
        if (upVoteClicked === false){
            fetch(`http://localhost:3001/posts/${post.id}`, {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    upvotes: post.upvotes + 1,
                    downvotes: post.downvotes
                })
            })
            .then(res => res.json())
            .then(data => setVoteCount(data.upvotes - data.downvotes))
       }else{
            fetch(`http://localhost:3001/posts/${post.id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                upvotes: post.upvotes
            })
        })
        .then(res => res.json())
        .then(data => setVoteCount(data.upvotes - data.downvotes))
       }
        setUpVoteClicked(upVoteClicked => !upVoteClicked)  
        setDownVoteClicked(false)  
    }

    return (
        <div className='voteButtons'>
            <Button icon name="upVote" onClick={handleUpVote}>
                <Icon name='angle up' />
            </Button>
            <span>{post.upvotes ? post.upvotes - post.downvotes : null}</span>
            <Button icon name="downVote" onClick={handleDownVote}>
                <Icon name='angle down' />
            </Button>
        </div>
    )
}

export default UpAndDownVote