import React from 'react'

const ButtonToggle = ({show, setShow}) => {
  return (
    <section>
        <div className="container space-x-6 ">
            <div onClick={()=> setShow(!show)} className={`btn ${show ? "btn-info" : ""}`}>Read Books</div>
            <div onClick={()=> setShow(!show)} className={`btn ${!show ? "btn-info" : ""}`}>Wishlist Books</div>
        </div>
    </section>
  )
}

export default ButtonToggle
