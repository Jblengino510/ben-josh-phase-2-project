import { Button } from "semantic-ui-react";
import {useHistory} from "react-router-dom"


function Profile({setLoggedInUser}){
    const history = useHistory()

    function handleLogoutClick(){
        setLoggedInUser(null)
        history.push("/")
    }

    return (
        <Button onClick={handleLogoutClick}>Logout</Button>
    )
}

export default Profile