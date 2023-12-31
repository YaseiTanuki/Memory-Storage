import Product from "../../components/Product/Product"
import './ProductsStyle.css'
import AddProductForm from "../../components/Product/AddProductForm/AddProductForm"
import ProductContext from "../../hooks/useContext/productContext"
import { useContext, useState, useEffect } from "react"
import useAuthAxios from "../../hooks/useAxios/useAuthAxios";

export default function Products() {
    const {allProducts, setAllProduct} = useContext(ProductContext)

    const [products, setProducts] = useState([{}])

    useEffect(() => {
        async function TakeProducts() {
          const authAxios = useAuthAxios()
          await authAxios.get("/api/home/product/").then((res) => {
            if(res.data.status == "OK"){
                setProducts((products) => (res.data.list))
                console.log(products)
            }
            console.log(res.data.message)
          })
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
                        <></>
                    )
                }
              })
            }
        </ul>
    </div>
    )
}