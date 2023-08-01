import './ProductStyle.css'
import ProductImg from '../../assets/img/prod.png'
import Popup from 'reactjs-popup'
import AuthContext from '../../hooks/useContext/authContext'
import { useContext } from 'react'
import ProductContext from '../../hooks/useContext/productContext'
import useAuthAxios from '../../hooks/useAxios/useAuthAxios'

export default function Product(props) {

    const {auth} = useContext(AuthContext)
    const {allProducts, setAllProducts} = useContext(ProductContext)
    const Delete = async() => {
        const Name = props.name
        console.log(Name)
        const authAxios = useAuthAxios();
        await authAxios.delete("/api/home/product", {
            data: {Name}
        }).then((res) => {
            if(res.status == 200) {
                console.log(res.data.message)
                setAllProducts(allProducts - 1)
            }
        })
    }
    return(<div className="product">
            <h2 className="name">{props.name}</h2>
            <img className='prodimg' src={ProductImg} alt="" />
            <p className="description">{props.children}</p>
            <Popup trigger={<button>...</button>}>
                <button onClick={Delete}>Delete</button>
            </Popup>
    </div>
    )
}