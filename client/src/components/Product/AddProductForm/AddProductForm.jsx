import { useContext, useState } from 'react';
import AuthContext from '../../../hooks/useContext/authContext';
import ProductContext from '../../../hooks/useContext/productContext';
import useAuthAxios from '../../../hooks/useAxios/useAuthAxios';

export default function AddProductForm() {

    const {auth} = useContext(AuthContext)
    const {allProducts, setAllProducts} = useContext(ProductContext)

    const[product, setProduct] = useState({
        Name: "", Description: ""
    })
    
    const Upload = async(event) => {
        event.preventDefault();
        const {Name, Description} = product;
        const authAxios = useAuthAxios();

        await authAxios.post("/api/home/product", {
            Name, Description
        }).then((res) => {
            if(res.status == 200){
                    console.log(res.data.message);
                setAllProducts(allProducts + 1)
            }
        })
    }

    return (
        <form className='AddProductForm' action="">
            <label htmlFor="Name">Product name:</label><br />
            <input type="text" name="Name" id="" onChange={(event) => {setProduct({...product, Name: event.target.value})}}/><br />
            <label htmlFor="Description">Description</label><br />
            <textarea name="Description" id="" cols="30" rows="10" onChange={(event) => {setProduct({...product, Description: event.target.value})}}></textarea><br />
            <input type="submit" onClick={Upload}/><br />
        </form>
    )
}