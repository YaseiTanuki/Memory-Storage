import React from "react";
import './AlbumPageStyle.css'

const AlbumPage = React.forwardRef((props, ref) => {
    return (
      <div className="alpage" ref={ref}>
        <h2 className="title">{props.title}</h2>
        <img src={props.imgSource}/>
        <p className="description">{props.children}</p>
      </div>
    );
  });

  export default AlbumPage;
