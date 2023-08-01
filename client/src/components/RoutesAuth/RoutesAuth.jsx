import {Outlet, Navigate} from 'react-router-dom'
import AuthContext from '../../hooks/useContext/authContext'
import { useContext } from 'react'

const RoutesAuth = () => {
    const {auth} = useContext(AuthContext)
    if(auth.UserName){
        return (
            <Outlet/>
        )
    }
    else {
        return (
            <Navigate to="/login" replace/>
        )
    }
}

export default RoutesAuth