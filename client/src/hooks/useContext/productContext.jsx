import { createContext, useState } from "react";
const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState({counter: 0});

    return (
    <ProductContext.Provider value={{allProducts, setAllProducts}}>
        {children}
    </ProductContext.Provider>
    )
}

export default ProductContext;