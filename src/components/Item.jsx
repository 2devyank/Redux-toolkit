import React from 'react'
import { useDispatch } from 'react-redux'
import "../App.css"
import { addtocart } from '../features/bag/bag';
const Item = ({title,img,price,id}) => {
  const dispatch=useDispatch();
  return (
    <table className="item">
      {/* <div className='rox'> */}
        <tr>
         <td>
           <img src={img} style={{height:"50px",width:"50px"}} alt="" />
          </td>
          
       <td>

          <p>{title}</p>
       </td>
      {/* </div> */}

<td>
          <p className='price'>{price}</p>
  </td>
<td>

        <button className='buts' onClick={()=>dispatch(addtocart({id}))}>Add To Cart</button>
</td>
          </tr>
        </table>
  )
}

export default Item