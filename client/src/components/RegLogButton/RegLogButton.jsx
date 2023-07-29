import './RegLogButtonStyle.css'
import {useNavigate} from 'react-router-dom'

export function RegLogButton() {
    const Navigate = useNavigate();

    function Register() {
        Navigate("/register");
    }

    function Login() {
        Navigate("/login");
    }

    return (
        <div>
            <ul>
                <li><button className='register' onClick={Register}>Register</button></li>
                <li><button className='login' onClick={Login}>Login</button></li>
            </ul>
        </div>
    )
}