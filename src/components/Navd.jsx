import React from 'react'
import img from "../assets/bag.png"
const Navd = () => {
  return (
   
    <nav className='navabar'>
        <h1>Kharidlo</h1>
        <div className='left'><img src={img} style={{height:"30px",width:"30px"}} /><p>1</p></div>
    </nav>
  )
}

export default Navd