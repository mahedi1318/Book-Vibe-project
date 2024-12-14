import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ShowBooks from '../ShowBooks'


const WishListBooks = () => {   

    let singlewishValue = useLoaderData()
    console.log(singlewishValue)

  return (
    <section>
        <div className="container">
            {singlewishValue.map((wish)=>(
                <ShowBooks key={wish.id} allData={wish} />
            ))}        
        </div>
    </section>
  )
}

export default WishListBooks
