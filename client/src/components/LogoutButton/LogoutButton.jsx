import { useNavigate } from "react-router-dom";
import { useContext} from 'react'
import AuthContext from "../../hooks/useContext/authContext";
import usePublicAxios from "../../hooks/useAxios/useAuthAxios";
import './LogoutButtonStyles.css'

export default function LogoutButton() {

    const {auth, setAuth} = useContext(AuthContext);
    const Navigate = useNavigate();

    const Logout = async(event) => {

        const publicAxios = usePublicAxios();
        await publicAxios.post('/api/logout', {
            message: "I want to logout"
        }).then((res) => {
            if(res.data.status == "OK"){
                console.log("Logged out")
                setAuth({});
                window.localStorage.removeItem("user")
                window.localStorage.removeItem("token")
                Navigate("/")
            }
        })
    }

    return(
        <button className="LogoutButton" onClick={Logout}>Logout</button>
    )
}