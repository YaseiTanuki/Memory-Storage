import React, { useContext } from "react";
import './AlbumPageStyle.css'
import AlbumContext from '../../hooks/useContext/albumContext';
import Popup from "reactjs-popup";
import useAuthAxios from "../../hooks/useAxios/useAuthAxios";

const AlbumPage = React.forwardRef((props, ref) => {

  const {album, setAlbum} = useContext(AlbumContext)
  const Delete = async () => {
    const Title = props.title
    const authAxios = useAuthAxios();
    await authAxios.delete("http://localhost:1707/api/home/album", {
      data: {
        Title
      }
    }).then((res) => {
      if(res.data.status == "OK"){
        console.log("Deleted")
        setAlbum(album - 1)
      }
    })
  }
    return (
      <div className="alpage" ref={ref}>
        <h2 className="title">{props.title}</h2>
        <img src={props.imgSource}/>
        <p className="description">{props.children}</p>
        <Popup trigger={<button className="more">...</button>}>
          <button onClick={Delete}>Delete</button>
        </Popup>
      </div>
    );
  });

  export default AlbumPage;
