import React from "react";
import './BookStyle.css'

const AddPage = React.forwardRef((props, ref) => {
    return (
      <div className="addpage" ref={ref}>
        {props.children}
      </div>
    );
  });

  export default AddPage;
