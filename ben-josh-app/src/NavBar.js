import SearchPosts from "./SearchPosts"
import { Link } from "react-router-dom"

function NavBar({ search, setSearch }){
    return (
        <>
        <div className='navBar'>
            <Link to="/" className="navBarLink"><h1>Creddit</h1></Link>
            <SearchPosts search={search} setSearch={setSearch}/>
            <Link to="signup" className="navBarLink" ><h3>Login/Signup</h3></Link>
        </div>
        </>
    )
}

export default NavBar