import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {

  const items = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(remove(id))
  }

  return (
    <>
      <h3 style={{textAlign: 'center'}}>Cart</h3>
      <div className='productsWrapper'>
        {
          items && items.map((item) => (
            <div className='card' key={item.id}>
              <img src={item.image} alt="image" />
              <h4>{item.title}</h4>
              <h5>{item.price}</h5>
              <button className='btn' onClick={() => handleRemove(item.id)}>remove</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Cart