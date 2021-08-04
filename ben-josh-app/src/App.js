import Home from "./Home"
import NavBar from "./NavBar";
import CreatePostForm from "./CreatePostForm";
import PostDetails from "./PostDetails";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

//benjamin's thoughts on the user object
/*
useState // or useContext

*/ 

function App() {
  const [search, setSearch ]= useState("")
  const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3001/posts?_embed=comments')
        .then(r=> r.json())
        .then(data=>setPosts(data))
    }, [])
    

  function handlePostDelete(id){
      fetch(`http://localhost:3001/posts/${id}`, {
        method: 'DELETE'
      })
      setPosts(posts.filter(post=> post.id!==id))
  } 

  const searchedPosts = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="app">
      
      <NavBar search={search} setSearch={setSearch}/>
      
      <Switch>

        <Route path="/posts/new">
          <CreatePostForm setPosts={setPosts} posts={posts}/>
        </Route>

        <Route exact path={'/posts/:postId'}>
           <PostDetails allPosts={posts} setPosts={setPosts} handlePostDelete={handlePostDelete}/>
        </Route> 

        <Route path="/">
          <Home posts={searchedPosts} setPosts={setPosts} handlePostDelete={handlePostDelete} />
        </Route>
         
      </Switch>
      
    </div>
  );
}

export default App;
