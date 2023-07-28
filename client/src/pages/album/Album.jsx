import HTMLFlipBook from "react-pageflip";
import AlbumPage from "../../components/Book/AlbumBook.jsx";
import './AlbumStyle.css'

function Album(props) {
    return (
      <HTMLFlipBook
       className="album" 
       width={700} 
       height={800}
       showCover={true}>
        <AlbumPage  name="First" imgsource='/TestImage/Cat1.jpg'>Page text</AlbumPage>
        <AlbumPage name="Second" imgsource='/TestImage/Cat2.jpg'>Page text</AlbumPage>
        <AlbumPage name="third" imgsource='/TestImage/Cat03.jpg'>Page text</AlbumPage>
      </HTMLFlipBook>
    );
  }

export default Album;
