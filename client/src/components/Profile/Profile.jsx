import { useContext } from "react";
import AuthContext from "../../hooks/useContext/authContext";
import LogoutButton from "../LogoutButton/LogoutButton"
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const {auth} = useContext(AuthContext)
    const Navigate = useNavigate()
    const ToChangePasswdForm = () => {
        Navigate("/changepassword")
    }

    return(
        <div>
            <h2>Hello, {auth.UserName}</h2>
            <button onClick={ToChangePasswdForm}>Change Password</button>
            <LogoutButton/>
        </div>
    ) 

}