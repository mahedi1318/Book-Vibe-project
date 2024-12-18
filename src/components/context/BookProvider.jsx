import React, { createContext, useState } from 'react'

export const BookContext = createContext()

const BookProvider = ({children}) => {

    let [read, setRead] = useState([])
    let [wish, setWish] = useState([])

    let bookProduct = {
        read, setRead,
        wish, setWish,
    }

  return (
    <BookContext.Provider value={bookProduct}>
        {children}
    </BookContext.Provider>
  )
}

export default BookProvider

