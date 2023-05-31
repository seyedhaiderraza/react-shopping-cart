import React from 'react'
import './Cart.styles'
import CartItem from '../CartItem/CartItem'
//styles
import { Wrapper } from './Cart.styles'
//types
import { CartItemType } from '../App'

 type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType)=> void;
    removeFromCart: (id: number)=> void
 }
const Cart: React.FC<Props>= (props: Props) => {
    const { cartItems, addToCart, removeFromCart} = props
  return (
    <Wrapper>
      <h2>Your shopping Cart</h2>
      {cartItems.length===0? <p> No Items in Cart</p>:null}
      {cartItems.map(item=>(
        <CartItem key={item.id}
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        />
      ))}
    </Wrapper>
  )
}

export default Cart
