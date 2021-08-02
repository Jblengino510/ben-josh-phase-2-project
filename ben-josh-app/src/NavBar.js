import SearchPosts from "./SearchPosts"

function NavBar(){
    return (
        <>
        <div className='navBar'>
            <h1>Creddit</h1>
            <SearchPosts />
            <h3>Login/Signup</h3>
        </div>
        </>
    )
}

export default NavBar