import React from 'react'
import { useSelector } from 'react-redux'
import img from "../assets/bag.png"
const Navd = () => {
  const {amount} =useSelector((store)=>store.bag);
  return (
   
    <nav className='navabar'>
        <h1>Kharidlo</h1>
        <div className='left'><img src={img} style={{height:"30px",width:"30px"}} /><p>{amount}</p></div>
    </nav>
  )
}

export default Navd