import Home from "./Home"
import NavBar from "./NavBar";
import CreatePostForm from "./CreatePostForm";
import PostDetails from "./PostDetails";
import Login from "./Login";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import Signup from "./Signup";
import Profile from "./Profile";

//benjamin's thoughts on the user object
/*
useState // or useContext

*/ 

function App() {
  const [ search, setSearch ]= useState("")
  const [ posts, setPosts ] = useState([])
  const [loggedInUser, setLoggedInUser] = useState(null)

  const history = useHistory()
  const [darkMode, setDarkMode] = useState(false)

    useEffect(()=>{
        fetch('http://localhost:3000/posts?_embed=comments')
        .then(r => r.json())
        .then(data => setPosts(data))
    }, [])
    

  function handlePostDelete(id){
      fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE'
      })
      setPosts(posts.filter(post => post.id !== id))
      history.push("/")
  } 

  const searchedPosts = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className={darkMode ? "darkModeApp" : "app"}>
      
      <NavBar search={search} setSearch={setSearch} loggedInUser={loggedInUser} darkMode={darkMode} setDarkMode={setDarkMode}/>
      
      <Switch>

        <Route path="/posts/new">
          <CreatePostForm setPosts={setPosts} posts={posts} loggedInUser={loggedInUser}/>
        </Route>

        <Route path="/login">
          <Login setLoggedInUser={setLoggedInUser}></Login>
        </Route>

        <Route path="/signup">
          <Signup setLoggedInUser={setLoggedInUser}></Signup>
        </Route>

        <Route path="/profile">
          <Profile setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser}/>
        </Route>

        <Route exact path={"/posts/:postId"}>
           <PostDetails allPosts={posts} setPosts={setPosts} handlePostDelete={handlePostDelete} loggedInUser={loggedInUser}/>
        </Route> 

        <Route path="/">
          <Home posts={searchedPosts} setPosts={setPosts} handlePostDelete={handlePostDelete} loggedInUser={loggedInUser}/>
        </Route>
         
      </Switch>
      
    </div>
  );
}

export default App;
