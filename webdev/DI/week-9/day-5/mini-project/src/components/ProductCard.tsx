import { memo, useRef } from 'react'
import type { Product } from '../store/productsSlice'

interface Props {
  product: Product
  inCart: boolean
  onAdd: (id: number) => void
  onRemove: (id: number) => void
}

const ProductCard = memo(function ProductCard({ product, inCart, onAdd, onRemove }: Props) {
  const renderCount = useRef(0)
  renderCount.current += 1

  return (
    <div className={`product-card ${inCart ? 'in-cart' : ''}`}>
      <div className="card-header">
        <span className="category-tag">{product.category}</span>
        <span className="render-count">renders: {renderCount.current}</span>
      </div>

      <h3 className="product-name">{product.name}</h3>

      <div className="card-footer">
        <span className="price">${product.price.toFixed(2)}</span>
        <span className="rating">{'★'.repeat(Math.round(product.rating))} {product.rating}</span>
      </div>

      <button
        className={`cart-btn ${inCart ? 'remove' : 'add'}`}
        onClick={() => inCart ? onRemove(product.id) : onAdd(product.id)}
      >
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  )
})

export default ProductCard
