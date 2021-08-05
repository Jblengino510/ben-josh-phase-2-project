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
  const myStorage = window.localStorage;
  console.log(myStorage)

    useEffect(()=>{
      const localUser = localStorage.getItem("user");
        if (localUser) {
        const foundUser = JSON.parse(localUser);
        console.log(JSON.parse(localUser))
        setLoggedInUser(foundUser)}
        fetch('http://localhost:3000/posts?_embed=comments&_expand=user')
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
          <Profile allPosts={posts} setPosts={setPosts} handlePostDelete={handlePostDelete} setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} darkMode={darkMode}/>
        </Route>

        <Route exact path={"/posts/:postId"}>
           <PostDetails allPosts={posts} setPosts={setPosts} handlePostDelete={handlePostDelete} loggedInUser={loggedInUser}/>
        </Route> 

        <Route path="/">
          <Home posts={searchedPosts} setPosts={setPosts} handlePostDelete={handlePostDelete} loggedInUser={loggedInUser} darkMode={darkMode}/>
        </Route>
         
      </Switch>
      
    </div>
  );
}

export default App;
