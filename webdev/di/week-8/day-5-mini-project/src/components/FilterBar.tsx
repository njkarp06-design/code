import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../store/store'
import { setSearch, setCategory } from '../store/productsSlice'
import { selectFilters, selectCategories } from '../store/selectors'

function FilterBar() {
  const dispatch = useDispatch<AppDispatch>()
  const filters = useSelector(selectFilters)
  const categories = useSelector(selectCategories)

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearch(e.target.value))
    },
    [dispatch]
  )

  const handleCategory = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setCategory(e.target.value))
    },
    [dispatch]
  )

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={filters.search}
        onChange={handleSearch}
        className="search-input"
      />
      <select value={filters.category} onChange={handleCategory} className="category-select">
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterBar
