import React from 'react'
import {Button} from '@mui/material'
//types
import { CartItemType } from '../App'
//styles
import { Wrapper } from './Item.styles'

type Props = {
    item: CartItemType;
    handleAddtoCart: (clickedItem: CartItemType) => void;
}
const Item: React.FC<Props> = (props:Props) => {
    const {item, handleAddtoCart} = props
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={()=> handleAddtoCart(item)}>Add to Cart</Button>
    
    </Wrapper>
  )
}

export default Item
