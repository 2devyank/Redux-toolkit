import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../features/bag/bag';

const Cart = ({ title, img, price, id }) => {
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
          <p className='price'>{price}</p>
        </td>
        <td>

<button>+</button>
1
<button>-</button>
</td>
        <td>

         <button onClick={()=>dispatch(removeItem({id}))}>Remove Item</button>
        </td>
       
      </tr>
    </table>
  )
}

export default Cart