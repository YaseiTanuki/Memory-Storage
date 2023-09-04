import HTMLFlipBook from "react-pageflip";
import AlbumPage from "../../components/Book/AlbumPage.jsx";
import React, { useState, useEffect, useContext } from "react";
import './AlbumStyle.css'
import AddAlbumPageForm from "../../components/Book/AddAlbumPageForm/addAlbumPageForm.jsx";
import Popup from 'reactjs-popup'
import AlbumContext from "../../hooks/useContext/albumContext.jsx";
import useAuthAxios from "../../hooks/useAxios/useAuthAxios.jsx";
import NPage from "../../components/Book/Npage.jsx";
import CoverPage from "../../components/Book/CoverPage.jsx";
import GuildPage from "../../components/Book/GuildPage.jsx"
import { Component } from "react";

function Album(props) {

  var Book
  const {album, setAlbum} = useContext(AlbumContext);
  const [pages, setPages] = useState({
    AllImage: [],
    Filter: [],
  });

  var condition = "";
  console.log("rerender")
  console.log(pages.Filter)

  useEffect(() => {
    async function TakePages() {
      const authAxios = useAuthAxios();
      console.log("getting image")
        await authAxios.get("/api/home/album/").then((res) => {
          console.log(res.data.list)
          if(res.data.status == "OK" && res.data.len > 0){
            if (album != res.data.len)
              setAlbum(res.data.len);
            setPages({AllImage: res.data.list, Filter: res.data.list})
            console.log(res.data.list)
          }
          else{
            console.log("No page");
            setPages({Filter: [{Title: "No Page Found", Image: "/img/NoDoc.png", Description: "Start upload your image"}]});
            console.log(pages.Filter.length)
          }
        })
    }

    TakePages();
  }, [album])

  function FindPage(event) {
    event.preventDefault()
    condition = event.target.condition.value;
    console.log(condition)
    if(condition == "")
      {
        setPages({...pages, Filter: pages.AllImage.slice()})
        return;
      }
    console.log(pages)
    const Result = pages.AllImage.filter((page) => {
      return page.Title.includes(condition)
    })
    console.log(Result.length)
    if(Result.length == 0)
      return setPages({...pages, Filter: [{Title: "No Page Found", Image: "/img/NoDoc.png", Description: "Start upload your image"}]})
    console.log(Result)
    console.log("Not work")
    return setPages({...pages, Filter: Result})
  }

    return (
        <div className="albumPage">
          <Popup trigger={<img className="AddNewIcon" src="/img/addIcon.png"  alt="Add new page" />}>
            <AddAlbumPageForm></AddAlbumPageForm>
          </Popup>
          <form className="FilterForm" onSubmit={FindPage}>
            <label htmlFor="Find">Find your images</label><br />
            <input className="FindBar" type="text" name="condition"/>
            <input type="submit" value="Find"/>
          </form>
          <div className="BookContainer">
            <HTMLFlipBook
              className="album" 
              width={590} 
              height={690}
              showCover={false}
              maxShadowOpacity={1}>
                <CoverPage/>
                <GuildPage/>
                {
                  pages.Filter.map((page, index) => {
                      return (<AlbumPage key={index} title={page.Title} imgSource={page.Image}>{page.Description}</AlbumPage>)
                    })
                }
            </HTMLFlipBook>
          </div>
        </div>
    )
}

export default Album;
