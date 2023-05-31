import React from 'react'
import './CartItem.styles'
import {Button} from '@mui/material'
import { Wrapper } from './CartItem.styles'
import { CartItemType } from '../App'

type Props = {
  item: CartItemType;
  addToCart: (clickedItem:CartItemType)=> void;
  removeFromCart: (id: number) => void;
}
const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => {
  return (
    <Wrapper>
      <div>
        <h3>
          {item.title}
        </h3>
        <div className="information">
          <p>Price: ${item.price}</p>
          <p>Total: ${item.amount*item.price}.toFixed(2)</p>
        </div>
       
      </div>
    </Wrapper>
  )
}

export default CartItem
