import React from 'react';
import {useState} from 'react'
import {useQuery} from 'react-query'

//ui components
import { StyledButton } from './App.styles';
import { Drawer } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress/LinearProgress';
import Grid from '@mui/material/Grid/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { Wrapper } from './App.styles';
import Item from './Item/Item';
import Cart from './Cart/Cart'
//styles
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price:number ;
  title:string;
  amount: number;
}

const getProducts = async(): Promise<CartItemType[]>=>{
  return await(await fetch('https://fakestoreapi.com/products')).json()
}
function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItemType[]>([])

  const {data, isLoading, error} = useQuery<CartItemType[]>(
    'products', getProducts
  );
  console.log(data,isLoading,error)

  const getTotalItems = (cartItems: CartItemType[])=>{
    return cartItems.reduce((ack:number, cartItems)=> ack+cartItems.amount,0)
    
  }
  const handleAddtoCart = (clickedItem: CartItemType) => null
  const handleRemoveFromCart = ()=> null

  if(isLoading) return <LinearProgress/>
  if(error) return <p>Something went wrong</p>

  return (
    <div className="App">
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={()=> setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddtoCart} removeFromCart={handleRemoveFromCart}></Cart>
      </Drawer>
        <StyledButton onClick={()=>setCartOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color='error' />
            <AddShoppingCartIcon />
        </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item: CartItemType)=>(
          <Grid item key={item.id} xs={12} sm={4}>
            <Item  item={item} handleAddtoCart={handleAddtoCart}></Item>
           </Grid> 
        ))}
      </Grid>
    </Wrapper>
    </div>
  );
}

export default App;
