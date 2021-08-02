import NavBar from "./NavBar";
import CreatePostForm from "./CreatePostForm";
import PostList from "./PostList";
import { Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'



function App() {
  return (
    <div>
      <Switch>

        <Route>
          <NavBar />
        </Route>

        <Route>
          <PostList />
        </Route>
        
      </Switch>
      <PostList />
      <CreatePostForm />
    </div>
  );
}

export default App;
