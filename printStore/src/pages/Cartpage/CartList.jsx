import React from 'react'
import CartItem from './CartItem'

const CartList = (props) => {
    const {items} = props

    const sum = () => {
        return
    }
  return (
    <div>
        {items.map( (item) => (
            <CartItem key={item.id} image={item.image} title={item.title} media={item.media} price={item.price} />
        ))}
    <p>hi</p>
    </div>
  )
}

export default CartList