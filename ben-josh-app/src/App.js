import Home from "./Home"
import NavBar from "./NavBar";
import CreatePostForm from "./CreatePostForm";
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
        fetch('http://localhost:3001/posts/')
        .then(r=> r.json())
        .then(data=>setPosts(data))

    }, [])


  const searchedPosts = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))


  return (
    <div>
      
      <NavBar search={search} setSearch={setSearch}/>
      
      <Switch>

        <Route path="/posts/new">
          <CreatePostForm />
        </Route>

        <Route path="/">
          <Home posts={searchedPosts}/>
        </Route>
        
      </Switch>
      
    </div>
  );
}

export default App;
