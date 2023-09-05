import './GuildPageStyle.css'
import React from "react";

const GuildPage = React.forwardRef((props, ref) => {

    console.log("Guild page is rendered")

    return (
        <div className="GuildPage" ref={ref}>
            <h2>Feature</h2>
            <ol>
                <li value={1}>You can upload your image with upload popup on left side.</li>
                <li>Find your image by giving its title.</li>
                <li>Delete image by clicking ... button - Delete</li>
            </ol>
        </div>
    )
})

export default GuildPage;