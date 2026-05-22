import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Product {
  id: number
  name: string
  category: string
  price: number
  rating: number
}

interface ProductsState {
  items: Product[]
  filters: {
    category: string
    search: string
  }
  cart: number[]
}

const initialState: ProductsState = {
  items: [
    { id: 1,  name: 'Wireless Headphones',      category: 'Electronics', price: 89.99,  rating: 4.5 },
    { id: 2,  name: 'Running Shoes',             category: 'Clothing',    price: 64.99,  rating: 4.2 },
    { id: 3,  name: 'The Pragmatic Programmer',  category: 'Books',       price: 39.99,  rating: 4.8 },
    { id: 4,  name: 'USB-C Hub',                 category: 'Electronics', price: 45.00,  rating: 4.0 },
    { id: 5,  name: 'Yoga Mat',                  category: 'Sports',      price: 28.50,  rating: 4.6 },
    { id: 6,  name: 'Coffee Maker',              category: 'Kitchen',     price: 79.00,  rating: 4.3 },
    { id: 7,  name: 'TypeScript Handbook',       category: 'Books',       price: 34.99,  rating: 4.7 },
    { id: 8,  name: 'Mechanical Keyboard',       category: 'Electronics', price: 129.00, rating: 4.4 },
    { id: 9,  name: 'Denim Jacket',              category: 'Clothing',    price: 55.00,  rating: 3.9 },
    { id: 10, name: 'Blender',                   category: 'Kitchen',     price: 49.99,  rating: 4.1 },
    { id: 11, name: 'Resistance Bands',          category: 'Sports',      price: 18.00,  rating: 4.3 },
    { id: 12, name: 'Clean Code',                category: 'Books',       price: 29.99,  rating: 4.6 },
  ],
  filters: {
    category: 'All',
    search: '',
  },
  cart: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.filters.category = action.payload
    },
    setSearch(state, action: PayloadAction<string>) {
      state.filters.search = action.payload
    },
    addToCart(state, action: PayloadAction<number>) {
      if (!state.cart.includes(action.payload)) {
        state.cart.push(action.payload)
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((id) => id !== action.payload)
    },
  },
})

export const { setCategory, setSearch, addToCart, removeFromCart } = productsSlice.actions
export default productsSlice.reducer
