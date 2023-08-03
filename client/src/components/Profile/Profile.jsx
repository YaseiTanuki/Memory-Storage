import { useContext } from "react";
import AuthContext from "../../hooks/useContext/authContext";
import LogoutButton from "../LogoutButton/LogoutButton"
import { useNavigate } from "react-router-dom";
import './ProfileStyle.css'

export default function Profile() {
    const {auth} = useContext(AuthContext)
    const Navigate = useNavigate()
    const ToChangePasswdForm = () => {
        Navigate("/changepassword")
    }

    return(
        <div className="profile">
            <h2 className="greeting">Hello, {auth.UserName}</h2>
            <button className="ChangePasswdButton" onClick={ToChangePasswdForm}>Change Password</button>
            <LogoutButton/>
        </div>
    ) 

}