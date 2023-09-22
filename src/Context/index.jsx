import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    // const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen)

    // Product Detail - Show product
    const [showProduct, setShowProduct] = useState({});

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            showProduct,
            setShowProduct
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}