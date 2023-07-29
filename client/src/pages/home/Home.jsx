import { SiteName } from "../../components/SiteName/SiteName"
import { ToastContainer, toast } from 'react-toastify'

export default function Home() {
    return (
        <div>
            <SiteName/>
            <h1>Hello, you are in!</h1>
            <ToastContainer/>
        </div>
    )
}