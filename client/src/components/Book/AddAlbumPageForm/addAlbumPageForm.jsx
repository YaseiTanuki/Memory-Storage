import { useContext, useState } from 'react';
import './addAlbumPageFormStyle.css'
import '../../../hooks/useContext/albumContext'
import AlbumContext from '../../../hooks/useContext/albumContext';
import useAuthAxios from '../../../hooks/useAxios/useAuthAxios';

export default function AddAlbumPageForm() {
    const {album, setAlbum} = useContext(AlbumContext)

    const [page, setPage] = useState({
        Title: "",
        Image: "",
        Description: ""
    })

    const Upload = async(event) => {
        event.preventDefault();
        const {Title, Image, Description} = page;
        const authAxios = useAuthAxios();
        await authAxios.post("http://localhost:1707/api/home/album", {
            Title, Image, Description
        }).then((res => {
            if(res.data.status == "OK"){
                console.log(res.data.message);
                setAlbum(album + 1)
            }
        }))
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