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
  const calculateTotal = (items: CartItemType[])=>
  items.reduce((ack:number, item)=>{
      return ack + item.amount*item.price
  },0)
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
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  )
}

export default Cart
