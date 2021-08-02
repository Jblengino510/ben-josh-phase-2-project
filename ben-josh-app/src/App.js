import NavBar from "./NavBar";
import CreatePostForm from "./CreatePostForm";
import PostList from "./PostList";
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Switch>

        <Route>
          <NavBar />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
