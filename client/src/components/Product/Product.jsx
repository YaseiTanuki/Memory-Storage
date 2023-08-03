import './ProductStyle.css'
import ProductImg from '../../assets/img/prod.png'
import Popup from 'reactjs-popup'
import { useContext } from 'react'
import ProductContext from '../../hooks/useContext/productContext'
import useAuthAxios from '../../hooks/useAxios/useAuthAxios'

export default function Product(props) {

    const {allProducts, setAllProducts} = useContext(ProductContext)
    const Delete = async() => {
        const Name = props.name
        const authAxios = useAuthAxios();
        await authAxios.delete("/api/home/product", {
            data: {Name}
        }).then((res) => {
            if(res.data.status == "OK") {
                setAllProducts(allProducts - 1)
            }
            console.log(res.data.message)
        })
    }
    return(<div className="product">
            <h2 className="name">{props.name}</h2>
            <img className='prodimg' src={ProductImg} alt="" />
            <p className="description">{props.children}</p>
            <Popup trigger={<button className='more'>...</button>}>
                <button onClick={Delete}>Delete</button>
            </Popup>
    </div>
    )
}