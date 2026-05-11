import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from './store'

const selectItems = (state: RootState) => state.products.items
const selectFilters = (state: RootState) => state.products.filters
const selectCart = (state: RootState) => state.products.cart

export const selectFilteredProducts = createSelector(
  [selectItems, selectFilters],
  (items, filters) => {
    let result = items

    if (filters.category !== 'All') {
      result = result.filter((p) => p.category === filters.category)
    }

    if (filters.search.trim() !== '') {
      const q = filters.search.toLowerCase()
      result = result.filter((p) => p.name.toLowerCase().includes(q))
    }

    return result
  }
)

export const selectCategories = createSelector([selectItems], (items) => {
  const unique = Array.from(new Set(items.map((p) => p.category))).sort()
  return ['All', ...unique]
})

export const selectCartCount = createSelector(
  [selectCart],
  (cart) => cart.length
)

export const selectCartTotal = createSelector(
  [selectItems, selectCart],
  (items, cart) =>
    cart.reduce((sum, id) => {
      const product = items.find((p) => p.id === id)
      return sum + (product?.price ?? 0)
    }, 0)
)

export const selectCartItems = createSelector(
  [selectItems, selectCart],
  (items, cart) => items.filter((p) => cart.includes(p.id))
)

export { selectFilters }
