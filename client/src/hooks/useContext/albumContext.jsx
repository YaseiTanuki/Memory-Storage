import { createContext, useState } from "react";

const AlbumContext = createContext({});

export const AlbumProvider = ({ children }) => {
    const [album, setAlbum] = useState({pages: 0});

    return (
    <AlbumContext.Provider value={{album, setAlbum}}>
        {children}
    </AlbumContext.Provider>
    )
}

export default AlbumContext;