import React, {useState}from "react"
import './RegFormStyle.css'
import usePublicAxios from "../../hooks/useAxios/usePublicAxios"
import CheckReEnterPasswd from "../../utils/CheckReEnterPasswd"
import {ToastContainer, toast} from'react-toastify'

export default function RegForm() {

    const [user, setUser] = useState({
        UserName: "",
        Password: "",
        RePassword: ""
    })

    const Register = async(event) => {
        event.preventDefault();
        const {UserName, Password, RePassword} = user;
        if(!CheckReEnterPasswd(Password, RePassword)){
            return toast.error("Re-Enter Password is not correct")
        }
        const publicAxios = usePublicAxios();
        await publicAxios.post('/api/register', {
                UserName, Password
        }).then((res) => {
            console.log(res.data.message)
            if(res.data.status == "OK")
                toast.success("Register sucessful")
        })
        console.log(UserName, Password)
    }

    return (
        <div>
        <form className="RegForm" onSubmit={Register} action="">
            <label htmlFor="UserName">User name</label><br/>
            <input type="text" name="UserName" onChange={(event) => {setUser({...user, UserName: event.target.value})}}/><br />
            <label htmlFor="Passwd">Password</label><br />
            <input type="password" name="Passwd" onChange={(event) => {setUser({...user, Password: event.target.value})}}/><br />
            <label htmlFor="Repasswd">Re-Enter Password</label><br />
            <input type="password" name="Repasswd" onChange={(event) => {setUser({...user, RePassword: event.target.value})}}/><br />
            <input className="submitButton" type="submit" value="Submit" />
        </form>
        <ToastContainer/>
        </div>
    )
}