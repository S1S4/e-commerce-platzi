import { useContext } from "react";
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
    }
    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.2023',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        // al hacer checkout debera limpiar la orden
        context.setCartProducts([])
        // al hacer chekout se limpiara el carrito
        context.setCount(0)
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} scrollable-cards flex-col fixed right-0 border border-black bg-white rounded w-[360px] h-[calc(100vh-80px)]`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div 
                    className="cursor-pointer"
                    onClick={() => context.closeCheckoutSideMenu()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div className="px-6 flex-1">
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className="px-6">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light text-2xl">Total</span>
                    <span className="font-medium text-2xl">{totalPrice(context.cartProducts)}</span>
                </p>
                <button className="w-full mb-6 py-3 text-white bg-black rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu