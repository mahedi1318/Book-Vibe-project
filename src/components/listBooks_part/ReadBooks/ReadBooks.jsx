import React, { useEffect, useState } from 'react'
import ShowBooks from '../ShowBooks'
import { useLoaderData, useParams } from 'react-router-dom'

const ReadBooks = () => {

        const [allData, setAllData] = useState([]);

         useEffect(() => {
            fetch("./bookListData.json") 
              .then((response) => response.json())
              .then((data) => {
                if (Array.isArray(data)) {
                  setAllData(data);
                }       
              })    
          }, []);

          console.log(allData)

  return (
    <>
    <div className="container">
        {allData.map((item)=>(
            <ShowBooks allData={item} key={item.id}/>
        ))}
    </div>   
    </>
  )
}

export default ReadBooks
