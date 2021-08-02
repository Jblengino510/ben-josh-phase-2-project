import NavBar from "./NavBar";
import CreatePost from "./CreatePost"
import CreatePostForm from "./CreatePostForm";
import PostList from "./PostList";
import { Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

//benjamin's thoughts on the user object
/*
useState // or useContext

*/ 

function App() {
  return (
    <div>
      
      <NavBar />
      <CreatePost />
      <Switch>

        <Route path="/posts/new">
          <CreatePostForm />
        </Route>

        <Route path="/">
          <PostList />
        </Route>
        
      </Switch>
      
    </div>
  );
}

export default App;
