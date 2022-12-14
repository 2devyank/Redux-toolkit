import React from 'react'
import { useSelector } from 'react-redux'
import Cart from '../components/Cart';

const Bag = () => {
  const {totalcart,total} =useSelector((state)=>state.bag);
  console.log(totalcart)
  return (
    <div>
      {
        totalcart? (totalcart.map((item)=>{
          return <Cart key={item.id} {...item}/>
        })):(
          null
        )
      }
      <br />
      <hr />
      <div className='total'>
        <p>
          total
          </p>
          <p>${total}</p>
      </div>

    </div>
  )
}

export default Bag