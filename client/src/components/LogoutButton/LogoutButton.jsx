import { useNavigate } from "react-router-dom";
import { useContext} from 'react'
import AuthContext from "../../hooks/useContext/authContext";

export default function LogoutButton() {

    const {setAuth} = useContext(AuthContext);
    const Navigate = useNavigate();

    const Logout = async(event) => {

        const res = await fetch('http://localhost:1707/api/home/logout', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify ({
                message : "Logout please"
            })
        });

        if(res.status == 200){
            setAuth({});
            Navigate("/")
        }
    }

    return(
        <button onClick={Logout}>Logout</button>
    )
}