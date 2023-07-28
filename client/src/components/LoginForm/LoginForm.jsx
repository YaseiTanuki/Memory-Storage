import './LoginFormStyle.css'
import React, { useContext, useState } from 'react'
import {ToastContainer, toast} from'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../App'

export default function LoginForm() {

    const {state, dispatchMethod} = useContext(LoginContext)

    const [user, setUser] = useState({
        UserName: "",
        Password: ""
    })

    const Navigate = useNavigate();

    const Login = async(event) => {
        event.preventDefault();
        const {UserName, Password} = user;
        const res = await fetch('http://localhost:1707/api/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify ({
                UserName, Password
            })
        });

        if(res.status == 401){
            toast("Invalid User name or Password!")
        }
        else {
            dispatchMethod({type: "LOG", payload:true})
            toast("Login successfully")
            Navigate("/");
        }

    }

    return (
        <div>
            <form className="LoginForm" onSubmit={Login} action="">
                <label htmlFor="UserName">User name</label><br/>
                <input type="text" name="UsrName" onChange={(event)=>{setUser({...user, UserName: event.target.value})}}/><br />
                <label htmlFor="Passwd">Password</label><br />
                <input type="text" name="Passwd" onChange={(event)=>{setUser({...user, Password: event.target.value})}}/><br />
                <input className="submitButton" type="submit" value="Submit" />
            </form>
            <ToastContainer/>
        </div>
    )
}