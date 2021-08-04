import SearchPosts from "./SearchPosts"
import { Link } from "react-router-dom"

function NavBar({ search, setSearch, loggedInUser }){
    return (
        <>
        <div className='navBar'>
            <Link to="/" className="navBarLink"><h1>Creddit</h1></Link>
            <SearchPosts search={search} setSearch={setSearch}/>
            {loggedInUser ? <Link to="/profile" className="navBarLink" ><h3>Profile</h3></Link> : <Link to="/login" className="navBarLink" ><h3>Login</h3></Link>}
        </div>
        </>
    )
}

export default NavBar