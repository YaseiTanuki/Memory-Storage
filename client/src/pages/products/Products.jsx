import Product from "../../components/Product/Product"
import './ProductsStyle.css'
import AddProductForm from "../../components/Product/AddProductForm/AddProductForm"
import AuthContext from "../../hooks/useContext/authContext"
import ProductContext from "../../hooks/useContext/productContext"
import { useContext, useState, useEffect } from "react"

export default function Products() {
    const {auth} = useContext(AuthContext)
    const {allProducts, setAllProduct} = useContext(ProductContext)

    const [products, setProducts] = useState([{}])

    useEffect(() => {
        async function TakeProducts() {
          const OwnerName = auth.UserName;
          const res = await fetch(("http://localhost:1707/api/home/product/" + OwnerName), {
            method: 'GET',
            headers: {
              'Content-type': 'application/json'
          }
          })
      
          if(res.status == 200){
            await res.json().then((data) => {
              setProducts((products) => (data.data))
              console.log(products)
            })
          }
        }
    
        TakeProducts();
      }, [allProducts])

    return (
    <div className="products">
        <ul>
            <li><AddProductForm/></li>
            {
              products.map((product) => {
                if(product.Name){
                    return (
                        <li><Product name={product.Name} >{product.Description}</Product></li>
                )}
                else{
                    return (
                        ""
                    )
                }
              })
            }
        </ul>
    </div>
    )
}