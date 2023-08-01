import React, {useState}from "react"
import './RegFormStyle.css'
import usePublicAxios from "../../hooks/useAxios/usePublicAxios"

export default function RegForm() {

    const [user, setUser] = useState({
        UserName: "",
        Password: ""
    })

    const Register = async(event) => {
        event.preventDefault();
        const {UserName, Password} = user;
        const publicAxios = usePublicAxios();
        await publicAxios.post('http://localhost:1707/api/register', {
                UserName, Password
        });
        console.log(UserName, Password)
    }

    return (
        <form className="RegForm" onSubmit={Register} action="">
            <label htmlFor="UserName">User name</label><br/>
            <input type="text" name="UserName" onChange={(event) => {setUser({...user, UserName: event.target.value})}}/><br />
            <label htmlFor="Passwd">Password</label><br />
            <input type="text" name="Passwd" onChange={(event) => {setUser({...user, Password: event.target.value})}}/><br />
            <label htmlFor="Repasswd">Re-Enter Password</label><br />
            <input type="text" name="Repasswd"/><br />
            <input className="submitButton" type="submit" value="Submit" />
        </form>
    )
}