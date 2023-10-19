import { useContext } from 'react'
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    const itemsToRender = context.searchByTitle?.length > 0
      ? context.filteredItems
      : context.items;

    if (itemsToRender?.length > 0) {
      return (
        itemsToRender.map(item => (
          <Card key={item.id} data={item} />
        ))
      ) 
    } else {
      return <p>No results found</p>
    }
  }

  return (
    <>
      <div className='relative flex items-center justify-center w-80 mt-2 mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input type='text' placeholder='Search a Product' className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' onChange={(event) => context.setSearchByTitle(event.target.value)}/>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </>
  )
}

export default Home