import { useContext, useState } from 'react';
import './addAlbumPageFormStyle.css'
import '../../../hooks/useContext/albumContext'
import AlbumContext from '../../../hooks/useContext/albumContext';
import AuthContext from '../../../hooks/useContext/authContext';

export default function AddAlbumPageForm() {

    const {auth} = useContext(AuthContext)
    const {album, setAlbum} = useContext(AlbumContext)

    const [page, setPage] = useState({
        Title: "",
        Image: "",
        Description: ""
    })

    const Upload = async(event) => {
        event.preventDefault();
        const {Title, Image, Description} = page;
        const OwnerName = auth.UserName
        const res = await fetch("http://localhost:1707/api/home/album", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify ({
                OwnerName, Title, Image, Description
            })
        })

        if(res.status == 200){
            await res.json().then((data) => {
                console.log(data.message);
            })
            setAlbum((album) => ({pages: album.pages + 1}))
        }
    }

    const ConvertToBase64 = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result)
            setPage({...page, Image: reader.result})
        }
    }

    return (
        <form className="addAlbumPageForm">
            <label htmlFor="Tile">Title</label><br />
            <input type="text" onChange={(event) => setPage({...page, Title: event.target.value})}/><br />
            <label htmlFor="Image">Image</label><br />
            <input type="file" onChange={ConvertToBase64}/><br />
            <label htmlFor="Description">Your story here</label><br />
            <textarea className='description' onChange={(event) => setPage({...page, Description: event.target.value})}/><br />
            <input type="submit" value="Upload" onClick={Upload}/>
        </form>
    )
}