import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ITodo {
	id: number
	name: string
	isSuccess: boolean
}

interface ITodosProps {
	todos: ITodo[]
}

const initialState: ITodosProps = {
	todos: JSON.parse(localStorage.getItem('todo') || '[]'),
}

const updateLocalStorage = (todos: ITodo[]) => {
	localStorage.setItem('todo', JSON.stringify(todos))
}

export const TodoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<ITodo>) => {
			state.todos.push(action.payload)
			updateLocalStorage(state.todos)
		},

		removeTodo: (state, action: PayloadAction<number>) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload)
			updateLocalStorage(state.todos)
		},

		toggleTodo: (
			state,
			action: PayloadAction<{ id: number; isSuccess: boolean }>
		) => {
			const todo = state.todos.find(todo => todo.id === action.payload.id)
			if (todo) {
				todo.isSuccess = action.payload.isSuccess
				updateLocalStorage(state.todos)
			}
		},
	},
})

export const { addTodo, removeTodo, toggleTodo } = TodoSlice.actions
export default TodoSlice.reducer
