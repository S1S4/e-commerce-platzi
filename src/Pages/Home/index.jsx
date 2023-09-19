import { useState, useEffect } from 'react'
import Card from "../../Components/Card"
import apiUrl from "../../api"

function Home() {
  const [items, setItems] = useState(null);

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
    <>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map((item) => {
            return <Card key={item.id} data={item} />
          })
        }
      </div>
    </>
  )
}

export default Home