import './LoginFormStyle.css'
import React, { useContext, useState } from 'react'
import {ToastContainer, toast} from'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../hooks/useContext/authContext'
import usePublicAxios from '../../hooks/useAxios/usePublicAxios'

export default function LoginForm() {

    const {auth, setAuth} = useContext(AuthContext)

    const [user, setUser] = useState({
        UserName: "",
        Password: ""
    })

    const Navigate = useNavigate();

    const Login = async(event) => {
        event.preventDefault();
        const {UserName, Password} = user;
        const publicAxios = usePublicAxios()
        publicAxios.post('/api/login', {
                UserName, Password
        }).then((res) => {
            if(res.data.status == "OK"){
                    console.log(res.data.message)
                    const Token = res.data.token
                    window.localStorage.setItem("user", UserName)
                    window.localStorage.setItem("token", Token)
                    setAuth({UserName: UserName, Token: Token});
                    toast("Login successfully")
                    Navigate("/home");
            }
            else{
                toast.error("User name or password not match")
            }
            })
        }

    return (
        <div>
            <form className="LoginForm" onSubmit={Login} action="">
                <label htmlFor="UserName">User name</label><br/>
                <input type="password" name="UsrName" onChange={(event)=>{setUser({...user, UserName: event.target.value})}}/><br />
                <label htmlFor="Passwd">Password</label><br />
                <input type="password" name="Passwd" onChange={(event)=>{setUser({...user, Password: event.target.value})}}/><br />
                <input className="submitButton" type="submit" value="Submit" />
            </form>
            <ToastContainer/>
        </div>
    )
}