import React from 'react'
import { useDispatch } from 'react-redux'
import "../App.css"
import { addtocart } from '../features/bag/bag';
const Item = ({title,img,price,id}) => {
  const dispatch=useDispatch();
  return (
    <div className="item">
      <div className='rox'>
        <img src={img} style={{height:"50px",width:"50px"}} alt="" />
        <p>{title}</p>

      </div>

        <p>{price}</p>
        <button className='buts' onClick={()=>dispatch(addtocart({id}))}>Add To Cart</button>
        </div>
  )
}

export default Item