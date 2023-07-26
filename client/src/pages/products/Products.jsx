import Product from "../../components/Product/Product"
import './ProductsStyle.css'

export default function Products() {
    return (
    <div className="products">
        <ul>
            <li><Product name="Product 1">First</Product></li>
            <li><Product name="Product 2">Second</Product></li>
            <li><Product name="Product 3">Third</Product></li>
        </ul>
    </div>
    )
}