import { SiteName } from "../../components/SiteName/SiteName"
import { ToastContainer } from 'react-toastify'
import './HomeStyle.css'

export default function Home() {
    return (
        <div className="HomePage">
            <SiteName/>
            <div className="Greeting-container">
                <h1 className="Greeting">Hello, let's start exploring!</h1>
            </div>
            <ToastContainer/>
        </div>
    )
}