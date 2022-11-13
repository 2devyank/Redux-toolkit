import React from 'react'
import { useSelector } from 'react-redux'
import Cart from '../components/Cart';

const Bag = () => {
  const {totalcart} =useSelector((state)=>state.bag);
  return (
    <div>
      {
        totalcart[0].map((item)=>{
          return <Cart key={item.id} {...item}/>
        })
      }

    </div>
  )
}

export default Bag