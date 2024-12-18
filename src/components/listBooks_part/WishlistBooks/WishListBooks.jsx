import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import ShowBooks from '../ShowBooks'
import { BookContext } from '../../context/BookProvider'


const WishListBooks = () => {   

    const {wish, setWish} = useContext(BookContext)

    const deleteItem = (bookId)=>{
      let booksDelete = wish.filter((itemBook)=> itemBook.id !== bookId)
      setWish(booksDelete)
    }

  return (
    <section className='mb-20'>
      <div className="container">
        {wish.map((item)=>(
          <ShowBooks key={item.id} read={item} deleteItem={deleteItem}/>
        ))}
      </div>
    </section>
  )
}

export default WishListBooks
