import React, { useState } from 'react'
import ListBookHero from '../components/listBooks_part/ListBookHero'
import ButtonToggle from '../components/listBooks_part/ButtonToggle'
import ReadBooks from '../components/listBooks_part/ReadBooks/ReadBooks'
import WishListBooks from '../components/listBooks_part/WishlistBooks/WishListBooks'

const ListedBooks = () => {
  let [show, setShow] = useState(false)
  return (
    <>
      <ListBookHero />
      <ButtonToggle show={show} setShow={setShow}/>
      {show ? <WishListBooks /> : <ReadBooks />}
      
      
    </>
  )
}

export default ListedBooks
