import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../store/store'
import { removeFromCart } from '../store/productsSlice'
import { selectCartItems, selectCartCount, selectCartTotal } from '../store/selectors'

function CartSummary() {
  const dispatch = useDispatch<AppDispatch>()
  const cartItems = useSelector(selectCartItems)
  const cartCount = useSelector(selectCartCount)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <aside className="cart-summary">
      <h2>Cart ({cartCount})</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">No items in cart.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${item.price.toFixed(2)}</span>
                <button
                  className="cart-remove-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total: ${cartTotal.toFixed(2)}</strong>
          </div>
        </>
      )}
    </aside>
  )
}

export default CartSummary
