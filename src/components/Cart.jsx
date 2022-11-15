import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseitem, increaseitem, removeItem } from '../features/bag/bag';

const Cart = ({ title, img, price, id ,amount}) => {
    const dispatch=useDispatch();
  return (
    <table className="item">
      {/* <div className='rox'> */}
      <tr>
        <td>
          <img src={img} style={{ height: "50px", width: "50px" }} alt="" />
        </td>

        <td>

          <p>{title}</p>
        </td>
        {/* </div> */}

        <td>
          <p className='price'>${price}</p>
        </td>
        <td>

<button onClick={()=>dispatch(increaseitem({id}))}>+</button>
{amount}
<button onClick={()=>
  {if(amount===1){
    dispatch(removeItem({id}));
  }
  dispatch(decreaseitem({id}))}} >-</button>
</td>
        <td>

         <button onClick={()=>dispatch(removeItem({id}))}>Remove Item</button>
        </td>
       
      </tr>
    </table>
  )
}

export default Cart