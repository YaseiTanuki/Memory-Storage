import { useContext } from "react";
import AuthContext from "../../hooks/useContext/authContext";
import LogoutButton from "../LogoutButton/LogoutButton"


export default function Profile() {
    const {auth} = useContext(AuthContext)
    return(
        <div>
            <h2>Hello, {auth.UserName}</h2>
            <button>Change Password</button>
            <LogoutButton/>
        </div>
    ) 

}