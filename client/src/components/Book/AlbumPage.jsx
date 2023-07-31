import React, { useContext } from "react";
import './AlbumPageStyle.css'
import AlbumContext from '../../hooks/useContext/albumContext';
import AuthContext from '../../hooks/useContext/authContext';
import Popup from "reactjs-popup";

const AlbumPage = React.forwardRef((props, ref) => {

  const {auth} = useContext(AuthContext)
  const {album, setAlbum} = useContext(AlbumContext)
  const Delete = async () => {
    const OwnerName = auth.UserName;
    const Title = props.title
    const res = await fetch("http://localhost:1707/api/home/album", {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
    },
      body: JSON.stringify({OwnerName, Title})
    })
    if(res.status == 200){
      console.log("Deleted")
      setAlbum((album) => ({pages: album.pages - 1}))
    }
  }
    return (
      <div className="alpage" ref={ref}>
        <h2 className="title">{props.title}</h2>
        <img src={props.imgSource}/>
        <p className="description">{props.children}</p>
        <Popup trigger={<button>...</button>}>
          <button onClick={Delete}>Delete</button>
        </Popup>
      </div>
    );
  });

  export default AlbumPage;
