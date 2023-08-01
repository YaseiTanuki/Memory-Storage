import React from "react";
const NPage = React.forwardRef((props, ref) => {
    return (
        <div className="alpage" ref={ref}>
          <h2 className="title">{props.title}</h2>
          <img src={props.imgSource}/>
          <p className="description">{props.children}</p>
        </div>
      );
});

export default NPage;