import SearchPosts from "./SearchPosts"
import { Link } from "react-router-dom"
import { Sticky, Segment } from "semantic-ui-react"

function NavBar({ search, setSearch }){

    return (
        <>
            <Sticky>
            <div className='navBar'>
                <Link to="/" className="navBarLink"><h1>Creddit</h1></Link>
                <SearchPosts search={search} setSearch={setSearch}/>
                <Link to="signup" className="navBarLink" ><h3>Login/Signup</h3></Link>
            </div>
            </Sticky>
        </>
    )
}

export default NavBar