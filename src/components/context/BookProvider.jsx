import React, { createContext, useState } from 'react'

export const BookContext = createContext()

const BookProvider = ({children}) => {

    let [read, setRead] = useState([])

    let bookProduct = {
        read, setRead,
    }

  return (
    <BookContext.Provider value={bookProduct}>
        {children}
    </BookContext.Provider>
  )
}

export default BookProvider

