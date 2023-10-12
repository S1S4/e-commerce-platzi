import { useContext } from "react";
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard";
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    console.log('CART: ', context.cartProducts);
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
            <div className="px-6">
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu