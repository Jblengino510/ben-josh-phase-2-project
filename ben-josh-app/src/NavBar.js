import SearchPosts from "./SearchPosts"

function NavBar({ search, setSearch }){
    return (
        <>
        <div className='navBar'>
            <h1>Creddit</h1>
            <SearchPosts search={search} setSearch={setSearch}/>
            <h3>Login/Signup</h3>
        </div>
        </>
    )
}

export default NavBar