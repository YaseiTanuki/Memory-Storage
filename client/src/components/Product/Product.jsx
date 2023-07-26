import './ProductStyle.css'
import ProductImg from '../../assets/img/prod.png'

export default function Product(props) {
    return(<div className="product">
            <h2 className="name">{props.name}</h2>
            <img className='prodimg' src={ProductImg} alt="" />
            <p className="description">{props.children}</p>
    </div>
    )
}