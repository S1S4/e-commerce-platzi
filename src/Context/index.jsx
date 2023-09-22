import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen)
    // const openProductDetail = () => setIsProductDetailOpen(true);
    // const closeProductDetail = () => setIsProductDetailOpen(false);
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            toggleProductDetail
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}