import HTMLFlipBook from "react-pageflip";
import AlbumPage from "../../components/Book/AlbumPage.jsx";
import React, { useState, useEffect, useContext } from "react";
import './AlbumStyle.css'
import { ToastContainer, toast } from 'react-toastify'
import AddAlbumPageForm from "../../components/Book/AddAlbumPageForm/addAlbumPageForm.jsx";
import Popup from 'reactjs-popup'
import AlbumContext from "../../hooks/useContext/albumContext.jsx";
import AuthContext from "../../hooks/useContext/authContext.jsx";

function Album(props) {

  const {auth} = useContext(AuthContext)
  const {album, setAlbum} = useContext(AlbumContext)

  const [pages, setPages] = useState([{}])

  useEffect(() => {
    async function TakePages() {
      const OwnerName = auth.UserName;
      const res = await fetch(("http://localhost:1707/api/home/album/" + OwnerName), {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
      }
      })
  
      if(res.status == 200){
        await res.json().then((data) => {
          setPages((oldPages) => (data.data))
          console.log(pages)
        })
      }
    }

    TakePages();
  }, [album])


    return (
      <div className="albumPage">
        <HTMLFlipBook
          className="album" 
          width={700} 
          height={800}
          showCover={true}>
            {
              pages.map((page) => {
                return (
                  <AlbumPage key={page.title} title={page.Title} imgSource={page.Image}>{page.Description}</AlbumPage>
                )
              })
            }
        </HTMLFlipBook>
        <Popup trigger={<img className="AddNewIcon" src="/img/addIcon.png"  alt="Add new page" />}>
          <AddAlbumPageForm></AddAlbumPageForm>
        </Popup>
        <ToastContainer/>
      </div>
    );
}

export default Album;
