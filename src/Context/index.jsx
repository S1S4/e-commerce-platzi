import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen)

    // Product Detail - Show product
    const [showProduct, setShowProduct] = useState({});

    // Navbar - Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            toggleProductDetail,
            isProductDetailOpen,
            showProduct,
            setShowProduct,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}