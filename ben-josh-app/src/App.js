import Home from "./Home"
import NavBar from "./NavBar";
import CreatePostForm from "./CreatePostForm";
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
      
      <Switch>

        <Route path="/posts/new">
          <CreatePostForm />
        </Route>

        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
      
    </div>
  );
}

export default App;
