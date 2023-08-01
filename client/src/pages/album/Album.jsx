import HTMLFlipBook from "react-pageflip";
import AlbumPage from "../../components/Book/AlbumPage.jsx";
import React, { useState, useEffect, useContext } from "react";
import './AlbumStyle.css'
import AddAlbumPageForm from "../../components/Book/AddAlbumPageForm/addAlbumPageForm.jsx";
import Popup from 'reactjs-popup'
import AlbumContext from "../../hooks/useContext/albumContext.jsx";
import useAuthAxios from "../../hooks/useAxios/useAuthAxios.jsx";
import NPage from "../../components/Book/Npage.jsx";

function Album(props) {

  const {album, setAlbum} = useContext(AlbumContext)
  const [pages, setPages] = useState([{}])

  useEffect(() => {
    async function TakePages() {
      const authAxios = useAuthAxios();
        await authAxios.get("/api/home/album/").then((res) => {
          setAlbum(res.data.len);
          if(res.status == 200 && res.data.len > 0){
            setPages(res.data.list)
          }
          else{
            setPages([{Title: "No Page", Image: "/img/NoDoc.png", Description: "Start upload your image"}])
            console.log("No page");
          }
        })
    }

    TakePages();
  }, [album])

  function SelectRender() {
      return (
        <HTMLFlipBook
            className="album" 
            width={700} 
            height={800}
            showCover={false}>
              <img src="/img/bookCover.jpg" alt="" />
              {
                pages.map((page, index) => {
                  if(album > 0){
                    return (
                      <AlbumPage key={index} title={page.Title} imgSource={page.Image}>{page.Description}</AlbumPage>
                    )
                  }
                  else{
                    return( <NPage key={index} title={page.Title} imgSource={page.Image}>{page.Description}</NPage> )
                  }
                })
              }
          </HTMLFlipBook>
      )
  }

    return (
        <div className="albumPage">
          <SelectRender/>
          <Popup trigger={<img className="AddNewIcon" src="/img/addIcon.png"  alt="Add new page" />}>
            <AddAlbumPageForm></AddAlbumPageForm>
          </Popup>
        </div>
    )
}

export default Album;
