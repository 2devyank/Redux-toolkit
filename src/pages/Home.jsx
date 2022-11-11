import React from 'react'
import { useSelector } from 'react-redux'
import Item from '../components/Item';

const Home = () => {

  const { bagitem ,amount} = useSelector((state) => state.bag)
  console.log(bagitem);

  return (
    <div className='home'>
  

      <div className="mid">
        
        
      {
        bagitem.map((item)=>{
          return <Item key={item.id} {...item}/>
        })
      }

      </div>
    </div>
  )
}

export default Home