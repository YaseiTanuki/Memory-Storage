import { useContext } from 'react'
import { RegLogButton } from '../../components/RegLogButton/RegLogButton'
import { SiteName } from '../../components/SiteName/SiteName'
import AuthContext from '../../hooks/useContext/authContext'
import { Navigate } from 'react-router-dom'

export default function Lobby() {
    const {auth} = useContext(AuthContext)
    if(auth.UserName) {
        return (
            <Navigate to="/home" replace/>
        )
    }

    return (
    <div className = "container">
        <SiteName/>
        <RegLogButton/>
    </div>
    )
}