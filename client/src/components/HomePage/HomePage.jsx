import './HPStyle.css'
import {useNavigate} from 'react-router-dom'
export function WebName() {
    return (
        <div className='webname'>
            <h1>Memory Storage</h1>
        </div>
    )
}

export function RegLogButton() {
    const Navigate = useNavigate();

    function Register() {
        Navigate("/register");
    }

    return (
        <div>
            <ul>
                <li><button className='register' onClick={Register}>Register</button></li>
                <li><button className='login'>Login</button></li>
            </ul>
        </div>
    )
}