import React from 'react'

const Cart = ({ title, img, price, id }) => {
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

         <button>Remove Item</button>
        </td>
        <td>

         <button>+</button>
         1
         <button>-</button>
        </td>
      </tr>
    </table>
  )
}

export default Cart