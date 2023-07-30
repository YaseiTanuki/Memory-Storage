import './ProductStyle.css'
import ProductImg from '../../assets/img/prod.png'
import Popup from 'reactjs-popup'
import AuthContext from '../../hooks/useContext/authContext'
import { useContext } from 'react'
import ProductContext from '../../hooks/useContext/productContext'

export default function Product(props) {

    const {auth} = useContext(AuthContext)
    const {allProducts, setAllProducts} = useContext(ProductContext)
    const Delete = async() => {
        const OwnerName = auth.UserName
        const Name = props.name
        const res = await fetch("http://localhost:1707/api/home/product", {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify ({
                OwnerName, Name
            })
        })

        if(res.status == 200) {
            await res.json().then((data) => {
                console.log(data.message)
                
            })
            setAllProducts((allProducts) => ({count: allProducts.count - 1}))
        }
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