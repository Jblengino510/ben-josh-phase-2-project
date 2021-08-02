import {useState, useEffect} from 'react'
import {Input} from "semantic-ui-react"
import { Button } from 'semantic-ui-react'

function CreatePostForm(){
    return (
        <form>
            <div>
                <input type='text' placeholder='title'></input>
            </div>
            <div>
                <input type='text' placeholder='image url'></input>
            </div>
            <div>
                <textarea type='text' placeholder='Text (optional)'></textarea>
            </div>
            <div>
                <Button type='submit' color='red'>Post</Button>
            </div>
        </form>
    )
}

export default CreatePostForm