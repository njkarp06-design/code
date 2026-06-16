import { useSelector } from 'react-redux'
import { selectCartCount, selectCartTotal, selectCartItems } from '../store/selectors'

function CartSummary() {
  const count = useSelector(selectCartCount)
  const total = useSelector(selectCartTotal)
  const items = useSelector(selectCartItems)

  if (count === 0) {
    return (
      <aside className="cart-summary empty">
        <h2>Cart</h2>
        <p>No items yet.</p>
      </aside>
    )
  }

  return (
    <aside className="cart-summary">
      <h2>Cart ({count})</h2>
      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        Total: <strong>${total.toFixed(2)}</strong>
      </div>
    </aside>
  )
}

export default CartSummary
