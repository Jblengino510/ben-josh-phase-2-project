import SearchPosts from "./SearchPosts"
import { Link } from "react-router-dom"
import { Segment, Sticky, Checkbox, Icon } from "semantic-ui-react"


function NavBar({ search, setSearch, loggedInUser, darkMode, setDarkMode }){

    function toggleDarkMode(){
        setDarkMode(darkMode => !darkMode)
    }

    return (
        <>
        {darkMode 
        ? <Segment inverted>
            <Sticky>
            <div className={darkMode ? "darkModeNavBar" : "navBar"}>
                <Link 
                to="/" 
                className="navBarLink"
                >
                    <h1 style={darkMode ? {color: 'white'} : {color: 'black'}}>Creddit</h1>
                </Link>
                <SearchPosts search={search} setSearch={setSearch}/>
                <Checkbox toggle label="Night Mode" checked={darkMode} onChange={toggleDarkMode}/>   
                {loggedInUser 
                ? <Link to="/profile" className="navBarLink" ><h3 style={darkMode 
                ? {color: 'white'} 
                : {color: 'black'}}>Profile</h3></Link> 
                : <Link to="/login" className="navBarLink" >
                    <h3 style={darkMode ? {color: 'white'} : {color: 'black'}}>Login</h3>
                </Link>}               
            </div>
            </Sticky>
            </Segment> 
            : <Segment>
            <Sticky>
            <div className={darkMode ? "darkModeNavBar" : "navBar"}>
                <Link 
                to="/" 
                className="navBarLink"
                >
                    <h1 style={darkMode ? {color: 'white'} : {color: 'black'}}>Creddit</h1>
                </Link>
                <SearchPosts search={search} setSearch={setSearch}/>
                <Checkbox toggle label="Night Mode" checked={darkMode} onChange={toggleDarkMode}/>   
                {loggedInUser 
                ? <Link to="/profile" className="navBarLink" ><h3 style={darkMode 
                ? {color: 'white'} 
                : {color: 'black'}}>Profile</h3></Link> 
                : <Link to="/login" className="navBarLink" >
                    <h3 style={darkMode ? {color: 'white'} : {color: 'black'}}>Login</h3>
                </Link>}               
            </div>
            </Sticky>
            </Segment>}
            
        </>
    )
}

export default NavBar