import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todosSlice from './reducers/todos.slice'
import authSlice from './reducers/auth.slice'

const reducers = combineReducers({
	todosSlice,
    authSlice
})

export const ReactStore = configureStore({
	reducer: reducers,
})

export type RootState = ReturnType<typeof ReactStore.getState>
export type AppDispatch = typeof ReactStore.dispatch
