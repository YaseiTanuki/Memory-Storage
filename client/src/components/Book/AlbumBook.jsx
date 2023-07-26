import HTMLFlipBook from "react-pageflip";
import React from "react";
import './BookStyle.css'

const AlbumPage = React.forwardRef((props, ref) => {
    return (
      <div className="alpage" ref={ref}>
        <h2 className="name">{props.name}</h2>
        <img src={props.imgsource}/>
        <p className="description">{props.children}</p>
      </div>
    );
  });

  export default AlbumPage;
