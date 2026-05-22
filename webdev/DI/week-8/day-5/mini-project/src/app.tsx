import './app.css'
import FilterBar from './components/FilterBar'
import ProductList from './components/ProductList'
import CartSummary from './components/CartSummary'

function App() {
  return (
    <div className="layout">
      <header className="top-bar">
        <h1>Product Catalog</h1>
        <p className="subtitle">Day 5 — useSelector memoization &amp; useCallback optimization</p>
      </header>

      <div className="main-content">
        <section className="catalog-section">
          <FilterBar />
          <ProductList />
        </section>

        <CartSummary />
      </div>
    </div>
  )
}

export default App
