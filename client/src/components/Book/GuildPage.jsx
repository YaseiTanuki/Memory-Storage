import './GuildPageStyle.css'
import React from "react";

const GuildPage = React.forwardRef((props, ref) => {

    console.log("Guild page is rendered")

    return (
        <div className="GuildPage" ref={ref}>
            <h2>Feature</h2>
            <ul>
                <li><p>1. You can upload your image with upload popup on left side.</p></li>
            </ul>
        </div>
    )
})

export default GuildPage;