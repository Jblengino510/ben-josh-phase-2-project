import SearchPosts from "./SearchPosts"
import { Link } from "react-router-dom"

function NavBar({ search, setSearch }){
    return (
        <>
        <div className='navBar'>
            <Link to="/"><h1>Creddit</h1></Link>
            <SearchPosts search={search} setSearch={setSearch}/>
            <h3>Login/Signup</h3>
        </div>
        </>
    )
}

export default NavBar