import React, { useContext, useEffect, useState,  } from 'react';
import ShowBooks from '../ShowBooks';
import { BookContext } from '../../context/BookProvider';

const ReadBooks = () => {
  
  let {read, setRead} = useContext(BookContext)
  const [sortedRead, setSortedRead] = useState(read);  

  const deleteItem = (bookId)=>{
    let booksDelete = read.filter((itemBook)=> itemBook.id !== bookId)
    setSortedRead(booksDelete)
  }
 
  return (
    <>
      <div className="container pb-20">    
        {sortedRead.map((item) => (
          <ShowBooks read={item} key={item.id} deleteItem={deleteItem}/>
        ))}
      </div>
    </>
  );
};

export default ReadBooks;
