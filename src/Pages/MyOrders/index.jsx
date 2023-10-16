import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <>
      <Layout>
        <div className='relative flex items-center justify-center w-80'>
          <h1>MyOrders</h1>
        </div>
        {
          context.order?.map((order, index) => {
            <Link key={index} to={`/my-orders/${order.id}`}>
              <OrdersCard
                totalPrice={order.totalPrice} 
                totalProducts={order.totalProducts}
              />
            </Link>
          })
        }
      </Layout>
    </>
  )
}

export default MyOrders