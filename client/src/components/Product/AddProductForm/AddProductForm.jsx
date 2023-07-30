import { useContext, useState } from 'react';
import AuthContext from '../../../hooks/useContext/authContext';
import ProductContext from '../../../hooks/useContext/productContext';
export default function AddProductForm() {

    const {auth} = useContext(AuthContext)
    const {allProducts, setAllProducts} = useContext(ProductContext)

    const[product, setProduct] = useState({
        Name: "", Description: ""
    })
    
    const Upload = async(event) => {
        event.preventDefault();
        const {Name, Description} = product;
        const OwnerName = auth.UserName
        const res = await fetch("http://localhost:1707/api/home/product", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify ({
                OwnerName, Name, Description
            })
        })

        if(res.status == 200){
            await res.json().then((data) => {
                console.log(data.message);
            })
            setAllProducts((allProducts) => ({count: allProducts.count + 1}))
        }
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