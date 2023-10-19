const OrdersCard = props => {
    const { totalPrice, totalProducts} = props
    
    return (
        <div className="mb-4 border border-black rounded-lg p-4 w-80">
            <p className="flex justify-between">
                <div className="flex flex-col">
                    <span className="font-light">01.02.2023</span>
                    <span className="font-light">{totalProducts} articles</span>
                </div>
                <span className="flex items-center gap-1 font-medium text-2xl">
                    {totalPrice}$

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
            </p>
        </div>
    )
}

export default OrdersCard