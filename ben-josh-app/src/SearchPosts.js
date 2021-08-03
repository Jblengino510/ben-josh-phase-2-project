import { Input } from "semantic-ui-react"

function SearchPosts({ search, setSearch }){
    function handleSearch(e){
        setSearch(e.target.value)
    }
    return (
        <div>
            <Input onChange ={handleSearch} value={search} placeholder='Search...' />
            {/* <input 
            type="text"
            id="search"
            placeholder="Search Creddit"
            /> */}
        </div>
    )   
}

export default SearchPosts