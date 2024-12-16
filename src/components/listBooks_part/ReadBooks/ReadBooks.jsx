import React, { useEffect, useState } from 'react';
import ShowBooks from '../ShowBooks';

const ReadBooks = () => {
  const [allData, setAllData] = useState([]);
  const [sortBy, setSortBy] = useState("rating");

  useEffect(() => {
    fetch("./bookListData.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAllData(data);
        }
      });
  }, []);

 
  const handleSortChange = (e) => {
    const sortValue = (e.target.value);
    console.log(sortValue)
    setSortBy(sortValue);
    let sortedData = [...allData];
    if (sortValue === "rating") {
      sortedData.sort((a, b) => b.rating - a.rating);
    } else if (sortValue === "number-of-pages") {
      sortedData.sort((a, b) => a.pages - b.pages);
    } else if (sortValue === "publisher-year") {
      sortedData.sort((a, b) => a.year - b.year);
    }
    setAllData(sortedData);
  };

  return (
    <>
      <div className="container">
        <div className="mt-10 mb-10">
          <div className="text-center ">
            <select className="bg-[rgb(68,68,68,0.1)] text-[#444] rounded-lg work_sans font-semibold text-[16px] border-0" onChange={handleSortChange} >
              <option value="rating">Sort By: Rating</option>
              <option value="number-of-pages">Number of pages</option>
              <option value="publisher-year">Publisher year</option>
            </select>
          </div>
        </div>
        {allData.map((item) => (
          <ShowBooks allData={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default ReadBooks;
