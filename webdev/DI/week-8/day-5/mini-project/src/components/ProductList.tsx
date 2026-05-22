import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store/store'
import { addToCart, removeFromCart } from '../store/productsSlice'
import { selectFilteredProducts } from '../store/selectors'
import ProductCard from './ProductCard'

function ProductList() {
  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector(selectFilteredProducts)
  const cart = useSelector((state: RootState) => state.products.cart)

  const handleAdd = useCallback(
    (id: number) => {
      dispatch(addToCart(id))
    },
    [dispatch]
  )

  const handleRemove = useCallback(
    (id: number) => {
      dispatch(removeFromCart(id))
    },
    [dispatch]
  )

  if (products.length === 0) {
    return <p className="no-results">No products match your search.</p>
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          inCart={cart.includes(product.id)}
          onAdd={handleAdd}
          onRemove={handleRemove}
        />
      ))}
    </div>
  )
}

export default ProductList
