import React from "react"
import './CoverPageStyle.css'

const CoverPage = React.forwardRef((props, ref) => {

    return (
        <div className="CoverPage" ref={ref}>
            <h2>My Album</h2>
        </div>
    )
})

export default CoverPage;