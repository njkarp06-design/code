import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from './store'

const selectTasks = (state: RootState) => state.tasks
const selectCategories = (state: RootState) => state.categories

export const selectTasksByCategory = (categoryId: number) =>
    createSelector(selectTasks, (tasks) =>
        tasks.filter(t => t.categoryId === categoryId)
    )

export const selectCompletedTasks = createSelector(selectTasks, (tasks) =>
    tasks.filter(t => t.completed).length
)

export const selectCategoryById = (id: number) =>
    createSelector(selectCategories, (categories) =>
        categories.find(c => c.id === id)
    )

export { selectCategories, selectTasks }
