import {Outlet, Navigate} from 'react-router-dom'
import AuthContext from '../../hooks/useContext/authContext'
import { useContext, useEffect } from 'react'
import useAuthAxios from '../../hooks/useAxios/useAuthAxios'

const RoutesAuth = () => {
    const {auth, setAuth} = useContext(AuthContext)

    useEffect(() => {
        async function Authorize() {
          const authAxios = useAuthAxios();
          try {
            await authAxios.get("/api/home").then((res) => {
              console.log(res.data.message)
            })
          } catch (error) {
            console.log("Unauthorized")
            window.localStorage.clear();
            setAuth({})
          }
        }
    
        Authorize();
    })

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