import { useState } from "react"
import CheckReEnterPasswd from "../../utils/CheckReEnterPasswd";
import { ToastContainer, toast } from "react-toastify";
import useAuthAxios from "../../hooks/useAxios/useAuthAxios";
import './ChangePasswdFormStyle.css'

export default function ChangePasswdForm() {

    const [changePasswd, setChangePasswd] = useState({
        OldPasswd: "",
        NewPasswd: "",
        ReNewPasswd: "",
    })

    const UpdatePasswd = async(event) => {
        event.preventDefault();
        const {OldPasswd, NewPasswd, ReNewPasswd} = changePasswd;
        if(!CheckReEnterPasswd(NewPasswd, ReNewPasswd)){
            return toast("Re-Enter Password is not correct")
        }
        const authAxios = useAuthAxios();
        await authAxios.put("/api/home/changepasswd", {
            OldPasswd, NewPasswd
        }).then(res => {
            if(res.data.status == "OK"){
                console.log(res.data.message)
            }
            else {
                toast("Error occur")
            }
        })
    }

    return (
        <>
        <form className="ChangePasswdForm" action="" onSubmit={UpdatePasswd}>
            <label htmlFor="OldPasswd">Current password:</label><br />
            <input type="text" onChange={(event) => {setChangePasswd({...changePasswd, OldPasswd: event.target.value})}}/><br />
            <label htmlFor="NewPasswd">New password:</label><br />
            <input type="text" onChange={(event) => {setChangePasswd({...changePasswd, NewPasswd: event.target.value})}}/><br />
            <label htmlFor="ConfNewPasswd">Re-enter new password:</label><br />
            <input type="text" onChange={(event) => {setChangePasswd({...changePasswd, ReNewPasswd: event.target.value})}}/><br />
            <input className="submitButton" type="submit" value="Change Password" name="SubmitButton" />
        </form>
        <ToastContainer/>
        </>
    )
}