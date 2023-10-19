import { createContext, useState, useEffect } from "react"
import apiUrl from "../api"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail - Show product
    const [showProduct, setShowProduct] = useState({})

    // Navbar - Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart - Order
    const [order, setOrder] = useState([])

    // Get products
    const [items, setItems] = useState(null)

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/products`);
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error(`Ocurrio un error: ${error}`)
            }
        }
        fetchData();
    }, [])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            showProduct,
            setShowProduct,
            cartProducts,
            setCartProducts,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}