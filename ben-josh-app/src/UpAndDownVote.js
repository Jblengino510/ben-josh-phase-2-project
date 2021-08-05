import { useState } from "react"
import { Button, Icon } from 'semantic-ui-react'

function UpAndDownVote({ post }){
    const [ voteCount, setVoteCount ] = useState(post.upvotes - post.downvotes)
    const [ downVoteClicked, setDownVoteClicked ] = useState(false)
    const [ upVoteClicked, setUpVoteClicked ] = useState(false)
    

    function patchPayload( payload ){
        fetch(`http://localhost:3000/posts/${post.id}`, {
                 method: "PATCH",
                 headers: {'Content-Type': 'application/json'},
                 body: JSON.stringify(payload)
             })
             .then(res => res.json())
             .then(data => setVoteCount(data.upvotes - data.downvotes))
    }

    function handleDownVote(){
        let payload = {}
        if (downVoteClicked === false){
            payload = {
                downvotes: post.downvotes + 1,
                upvotes: post.upvotes
            }
        }else{
            payload = {
                downvotes: post.downvotes
            }
        }
        patchPayload(payload)
        setDownVoteClicked(downVoteClicked => !downVoteClicked)
        setUpVoteClicked(false)
    }
    function handleUpVote(){
        let payload = {}
        if (upVoteClicked === false){
            payload = {
                    upvotes: post.upvotes + 1,
                    downvotes: post.downvotes
                }
            } else{
            payload = {
                upvotes: post.upvotes
            }
        }
        patchPayload(payload)
        setUpVoteClicked(upVoteClicked => !upVoteClicked)  
        setDownVoteClicked(false)  
    }

    if(!voteCount){
        if(voteCount === 0){
        }else if(post.upvotes || post.upvotes === 0){
            setVoteCount(post.upvotes-post.downvotes)
        }
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