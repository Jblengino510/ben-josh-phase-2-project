import { useState } from "react"
import { Button, Icon } from 'semantic-ui-react'

function UpAndDownVote({ post }){
    const [ voteCount, setVoteCount ] = useState(post.upvotes - post.downvotes)
    const [ downVoteClicked, setDownVoteClicked ] = useState(false)
    const [ upVoteClicked, setUpVoteClicked ] = useState(false)
    
    function handleDownVote(){
        if (downVoteClicked === false){
             fetch(`http://localhost:3000/posts/${post.id}`, {
                 method: "PATCH",
                 headers: {'Content-Type': 'application/json'},
                 body: JSON.stringify({
                     downvotes: post.downvotes + 1,
                     upvotes: post.upvotes
                 })
             })
             .then(res => res.json())
             .then(data => setVoteCount(data.upvotes - data.downvotes))
        } else{ 
            fetch(`http://localhost:3000/posts/${post.id}`, {
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

    if(!voteCount){
        if(voteCount === 0){
        }else if(post.upvotes || post.upvotes === 0){
            setVoteCount(post.upvotes-post.downvotes)
        }
    }
    
    function handleUpVote(){
        if (upVoteClicked === false){
            fetch(`http://localhost:3000/posts/${post.id}`, {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    upvotes: post.upvotes + 1,
                    downvotes: post.downvotes
                })
            })
            .then(res => res.json())
            .then(data => setVoteCount(data.upvotes - data.downvotes))
       } else{
            fetch(`http://localhost:3000/posts/${post.id}`, {
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
            <Button 
            icon name="upVote" 
            style={upVoteClicked ? { color: 'green' } : { color: 'grey' }} 
            onClick={handleUpVote}
            >
                <Icon name='arrow up' />
            </Button>
            <span 
            style={voteCount > 0 ? { color: 'green' } : voteCount < 0 ? { color: 'red' } : { color: 'black' }}>
                {voteCount || voteCount === 0  ? voteCount : null}
            </span>
            <Button 
            icon name="downVote" 
            style={downVoteClicked ? { color: 'red' } : { color: 'grey' }} 
            onClick={handleDownVote}
            >
                <Icon name='arrow down' />
            </Button>
        </div>
    )
}

export default UpAndDownVote