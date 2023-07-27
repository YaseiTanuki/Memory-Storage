import React, {useState}from "react"
import './RegFormStyle.css'

export default function RegForm() {

    const [Usrname, setName] = useState("");
    const [Passwd, setPass] = useState("");
    const Register = async(event) => {
        event.preventDefault();
        fetch('http://localhost:1707/userinfo', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                UserName:Usrname,
                Password:Passwd
            })
        });
        console.log(Usrname, Passwd)
    }

    return (
        <form className="RegForm" onSubmit={Register} action="">
            <label htmlFor="UserName">User name</label><br/>
            <input type="text" name="UserName" onChange={(event) => {setName(event.target.value)}}/><br />
            <label htmlFor="Passwd">Password</label><br />
            <input type="text" name="Passwd" onChange={(event) => {setPass(event.target.value)}}/><br />
            <label htmlFor="Repasswd">Re-Enter Password</label><br />
            <input type="text" name="Repasswd"/><br />
            <input className="submitButton" type="submit" value="Submit" />
        </form>
    )
}