import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ITodo {
	id: number,
	name: string,
	description: string,
	isSuccess: boolean
}

interface ITodosProps {
	todos: ITodo[]
}

const initialState: ITodosProps = {
	todos: []
}


export const CreateTask = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<ITodo>) => {
			state.todos.push(action.payload)
		},

		removeTodo: (state, action: PayloadAction<number>) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload)
		}

	}
})